import { requestUrl } from 'obsidian';
import * as internal from 'stream';

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
  updated: Date; //TODO: should be a date type, what should I use over here?
}
export interface PocketbookCloudColorType {
  value: string;
  updated: Date; // TODO: date
}
export interface PocketbookCloudNoteType {
  value: string;
  updated: Date; // TODO: date
}
export interface PocketbookCloudNoteContent {
  text: string;
  updated: Date; // TODO: date
}
export interface PocketbookCloudMarkType {
  anchor: string;
  created: Date; // TODO: date, but epoch
  updated: Date; // TODO: date
}
export interface PocketbookCloudQuotationType {
  begin: string;
  end: string;
  text: string;
  updated: Date; // TODO: date
}
export interface PocketbookCloudNote {
  color: PocketbookCloudColorType;
  type: PocketbookCloudNoteType;
  note: PocketbookCloudNoteContent;
  mark: PocketbookCloudMarkType;
  quotation: PocketbookCloudQuotationType;
  uuid: string; //TODO: uuid type?
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

  constructor(private username: string, private password: string, private shop_name: string, private access_token: string, private refresh_token: string) {}

  async login() {
    const shop_id = await fetch(
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
      .then(data => data.providers.filter((item: any) => item.name.includes(this.shop_name)))
      .then(data => data[0].shop_id);

    const login_response = await requestUrl({
      url: 'https://cloud.pocketbook.digital/api/v1.0/auth/login/knv',
      method: 'POST',
      contentType: 'application/x-www-form-urlencoded',
      body: new URLSearchParams({
        shop_id,
        username: this.username,
        password: this.password,
        client_id: this.client_id,
        client_secret: this.client_secret,
      }).toString(),
    }).then(response => response.json);

    console.log(login_response);

    this.access_token = login_response.access_token;
    this.refresh_token = login_response.refresh_token;
  }

  async getAccessToken(): Promise<string> {
    // TODO: check if access token is still valid, use refresh token to get a new one, ...
    if (!this.access_token) {
      await this.login();
    }

    return this.access_token;
  }
}
