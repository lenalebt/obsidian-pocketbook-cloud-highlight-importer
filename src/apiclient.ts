import { requestUrl } from 'obsidian';
import PocketbookCloudHighlightsImporterPlugin from './main';

export interface PocketbookCloudBookCover {
  width: number;
  height: number;
  path: string;
}
export interface PocketbookCloudBookMetadata {
  title: string;
  authors: string;
  year: string;
  isbn: string;
  cover: PocketbookCloudBookCover[];
}
export interface PocketbookCloudBook {
  id: string;
  title: string;
  fast_hash: string;
  path: string;
  link: string;
  created_at: Date;
  read_status: string;
  collections: string;
  metadata: PocketbookCloudBookMetadata;
}
export interface PocketbookCloudNoteInfo {
  type: string; //TODO: guess this can be an enum or so?
  uuid: string; // UUID type? should exist I guess
  updated: Date;
}
export interface PocketbookCloudColorType {
  value: string;
  updated: Date;
}
export interface PocketbookCloudNoteType {
  value: string;
  updated: Date;
}
export interface PocketbookCloudNoteContent {
  text: string;
  updated: Date;
}
export interface PocketbookCloudMarkType {
  anchor: string;
  created: Date;
  updated: Date;
}
export interface PocketbookCloudQuotationType {
  begin: string;
  end: string;
  text: string;
  updated: Date;
}
export interface PocketbookCloudNote {
  color: PocketbookCloudColorType;
  type: PocketbookCloudNoteType;
  note: PocketbookCloudNoteContent;
  mark: PocketbookCloudMarkType;
  quotation: PocketbookCloudQuotationType;
  uuid: string; //TODO: uuid type?
}

interface PocketbookCloudShopInfo {
  alias: string;
  name: string;
  shop_id: string;
}

/**
 * Main things to know about the API:
 *
 * - fast_hash is a hash of the book file, it is used to identify the book
 */
export class PocketbookCloudApiClient {
  constructor(private login_client: PocketbookCloudLoginClient) {}

  async getBooks(): Promise<PocketbookCloudBook[]> {
    const access_token = await this.login_client.getAccessToken();
    const books = await requestUrl({
      url: 'https://cloud.pocketbook.digital/api/v1.0/books?limit=500', //TODO: pagination!
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Cache-Control': 'no-cache',
      },
    }).then(response => response.json.items);

    return books;
  }

  async getHighlightIdsForBook(fast_hash: string): Promise<PocketbookCloudNoteInfo[]> {
    const access_token = await this.login_client.getAccessToken();
    const highlights = await requestUrl({
      url: `https://cloud.pocketbook.digital/api/v1.0/notes?` + new URLSearchParams({ fast_hash }), //TODO: pagination!? unsure, never had that many notes.
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Cache-Control': 'no-cache',
      },
    }).then(response => response.json);

    return highlights;
  }

  async getHighlight(uuid: string, fast_hash: string): Promise<PocketbookCloudNote> {
    const access_token = await this.login_client.getAccessToken();
    const highlight = await requestUrl({
      url: `https://cloud.pocketbook.digital/api/v1.0/notes/${uuid}?` + new URLSearchParams({ fast_hash }),
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Cache-Control': 'no-cache',
      },
    }).then(response => response.json);

    return highlight;
  }

  //for some reason, the access tokens in the provided link seem to be invalid
  async getBookCover(book: PocketbookCloudBook): Promise<ArrayBuffer> {
    const access_token = await this.login_client.getAccessToken();
    const cover = await requestUrl({
      url: book.metadata.cover[0].path,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Cache-Control': 'no-cache',
      },
    }).then(response => response.arrayBuffer);

    return cover;
  }
}

export class PocketbookCloudLoginClient {
  // these values are taken from a login session of the official pocketbook cloud app
  // apparently they're not using PKCE; I take this as public knowledge and simply check it in.
  private client_id: string = 'qNAx1RDb';
  private client_secret: string = 'K3YYSjCgDJNoWKdGVOyO1mrROp3MMZqqRNXNXTmh';

  constructor(
    private plugin: PocketbookCloudHighlightsImporterPlugin,
    private username: string,
    private password: string | null,
    private shop_name: string,
    private access_token: string | null,
    private refresh_token: string | null,
    private access_token_valid_until: Date
  ) {}

  async login() {
    const shops: PocketbookCloudShopInfo[] = await fetch(
      'https://cloud.pocketbook.digital/api/v1.0/auth/login?' +
        new URLSearchParams({
          username: this.username,
          client_id: this.client_id,
          client_secret: this.client_secret,
        })
    )
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .then(data => data.providers.filter((item: PocketbookCloudShopInfo) => item.name.includes(this.shop_name)));

    const login_responses = await Promise.all(
      shops.map(async shop => {
        let result;
        try {
          if (this.refresh_token) {
            result = await requestUrl({
              url: 'https://cloud.pocketbook.digital/api/v1.0/auth/renew-token',
              method: 'POST',
              contentType: 'application/x-www-form-urlencoded',
              headers: {
                Authorization: `Bearer ${this.access_token}`,
              },
              body: new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token: this.refresh_token,
              }).toString(),
            }).then(response => response.json);
          } else if (this.password) {
            result = await requestUrl({
              url: `https://cloud.pocketbook.digital/api/v1.0/auth/login/${shop.alias}`,
              method: 'POST',
              contentType: 'application/x-www-form-urlencoded',
              body: new URLSearchParams({
                shop_id: shop.shop_id,
                username: this.username,
                password: this.password,
                client_id: this.client_id,
                client_secret: this.client_secret,
                grant_type: 'password',
                language: 'en',
              }).toString(),
            }).then(response => response.json);
          }
        } catch (error) {
          result = null;
        }
        return { shop, result };
      })
    );

    // use first defined response, if any
    const login_response = login_responses.filter(response => response.result).first();
    if (!login_response) {
      throw new Error('Could not log in to Pocketbook Cloud');
    }

    this.access_token = login_response.result.access_token;
    this.refresh_token = login_response.result.refresh_token;

    // sets the access token to expire 5 minutes before it actually does
    this.access_token_valid_until = new Date(Date.now() + login_response.result.expires_in * 1000 - 5 * 60 * 1000);

    this.plugin.settings.access_token = this.access_token!!;
    this.plugin.settings.refresh_token = this.refresh_token!!;
    this.plugin.settings.access_token_valid_until = this.access_token_valid_until;
    this.plugin.settings.shop_name = login_response.shop.name;
    await this.plugin.saveSettings();
  }

  async getAccessToken(): Promise<string> {
    // check if access token is still valid, use refresh token to get a new one, ...
    if (!this.access_token || this.access_token_valid_until < new Date()) {
      await this.login();
    }

    return this.access_token!!;
  }

  async getRefreshToken(): Promise<string> {
    if (!this.refresh_token) {
      await this.login();
    }

    return this.refresh_token!!;
  }

  getAccessTokenValidUntil(): Date {
    return this.access_token_valid_until;
  }
}
