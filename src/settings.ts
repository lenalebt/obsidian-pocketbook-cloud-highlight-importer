import { App, Modal, Notice, PluginSettingTab, Setting, TextComponent } from 'obsidian';
import { PocketbookCloudLoginClient } from './apiclient';
import PocketbookCloudHighlightsImporterPlugin from './main';

export interface PocketbookCloudHighlightsImporterPluginSettings {
  username: string;
  shop_name: string;
  access_token: string;
  access_token_valid_until: Date;
  refresh_token: string;
  import_folder: string;
}

export const DEFAULT_SETTINGS: PocketbookCloudHighlightsImporterPluginSettings = {
  username: '',
  shop_name: '',
  access_token: '',
  access_token_valid_until: new Date(),
  refresh_token: '',
  import_folder: '',
};

export class PocketbookCloudHighlightsImporterSettingTab extends PluginSettingTab {
  plugin: PocketbookCloudHighlightsImporterPlugin;

  constructor(app: App, plugin: PocketbookCloudHighlightsImporterPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;

    containerEl.empty();

    containerEl.createEl('h2', { text: 'Settings for Pocketbook Cloud Highlights Importer Plugin' });

    new Setting(containerEl)
      .setName('Username')
      .setDesc('The mail address you log in to the pocketbook cloud with')
      .addText(text =>
        text
          .setPlaceholder('crocodile@example.com')
          .setValue(this.plugin.settings.username)
          .onChange(async value => {
            this.plugin.settings.username = value;
            await this.plugin.saveSettings();
          })
      );

    let shop_name_text_field: TextComponent;
    new Setting(containerEl)
      .setName('Credentials')
      .setDesc('Use this to log in')
      .addButton(button =>
        button.setButtonText('Log in').onClick(async () => {
          new PocketbookCloudHighlightsImporterPasswordInput(this.app, async password => {
            const api_client = new PocketbookCloudLoginClient(
              this.plugin,
              this.plugin.settings.username,
              password,
              this.plugin.settings.shop_name,
              null,
              null,
              new Date()
            );
            try {
              await api_client.login();
            } catch (error) {
              new Notice(`❌ Error logging in: ${error.message}`);
              return;
            }

            this.plugin.settings.access_token = await api_client.getAccessToken();
            this.plugin.settings.access_token_valid_until = api_client.getAccessTokenValidUntil();
            this.plugin.settings.refresh_token = await api_client.getRefreshToken();
            await this.plugin.saveSettings();

            shop_name_text_field.setValue(this.plugin.settings.shop_name);

            new Notice('Logged in successfully');
          }).open();
        })
      );

    new Setting(containerEl)
      .setName('Shop name')
      .setDesc(
        'The name of the shop you are logging in to. Will be auto-filled on login - only change if that does not work well and you know what you are doing.'
      )
      .addText(text => {
        shop_name_text_field = text;
        text
          .setPlaceholder('')
          .setValue(this.plugin.settings.shop_name)
          .onChange(async value => {
            this.plugin.settings.shop_name = value;
            await this.plugin.saveSettings();
          });
        return text;
      });

    new Setting(containerEl)
      .setName('Import Folder')
      .setDesc('The folder the plugin will write to. The folder should be empty, do not store other data here.')
      .addText(text =>
        text
          .setPlaceholder('Enter your folder path from vault root')
          .setValue(this.plugin.settings.import_folder)
          .onChange(async value => {
            // filter out leading slashes, they are not needed
            this.plugin.settings.import_folder = value.replace(/^\//, '');
            await this.plugin.saveSettings();
          })
      );
  }
}

export class PocketbookCloudHighlightsImporterPasswordInput extends Modal {
  password: string;
  onSubmit: (result: string) => void;

  constructor(app: App, onSubmit: (result: string) => void) {
    super(app);
    this.onSubmit = onSubmit;
  }

  onOpen() {
    const { contentEl } = this;

    contentEl.createEl('h2', { text: 'Enter your password (password will not be saved).' });

    new Setting(contentEl).setName('Password').addText(text =>
      text.onChange(value => {
        this.password = value;
      })
    );

    new Setting(contentEl).addButton(btn =>
      btn
        .setButtonText('Submit')
        .setCta()
        .onClick(() => {
          this.close();
          this.onSubmit(this.password);
        })
    );
  }

  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
}
