import { App, PluginSettingTab, Setting } from 'obsidian';
import PocketbookCloudHighlightsImporterPlugin from './main';

export interface PocketbookCloudHighlightsImporterPluginSettings {
  username: string;
  password: string;
  shop_name: string;
  access_token: string;
  refresh_token: string;
  import_folder: string;
}

export const DEFAULT_SETTINGS: PocketbookCloudHighlightsImporterPluginSettings = {
  username: '',
  password: '',
  shop_name: '',
  access_token: '',
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

    new Setting(containerEl)
      .setName('Password')
      .setDesc('Your login password')
      .addText(text =>
        text
          .setPlaceholder('Enter your password')
          .setValue(this.plugin.settings.password)
          .onChange(async value => {
            this.plugin.settings.password = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName('Shop name')
      .setDesc('The name of the shop you are logging in to. Leave empty if you only have one; you can use a substring of the shop name here.')
      .addText(text =>
        text
          .setPlaceholder('')
          .setValue(this.plugin.settings.shop_name)
          .onChange(async value => {
            this.plugin.settings.shop_name = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName('Access Token')
      .setDesc('This should be a hidden setting later on')
      .addText(text =>
        text
          .setPlaceholder('Enter your access token')
          .setValue(this.plugin.settings.access_token)
          .onChange(async value => {
            this.plugin.settings.access_token = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName('Refresh Token')
      .setDesc('This should be a hidden setting later on')
      .addText(text =>
        text
          .setPlaceholder('Enter your refresh token')
          .setValue(this.plugin.settings.refresh_token)
          .onChange(async value => {
            this.plugin.settings.refresh_token = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName('Import Folder')
      .setDesc('The folder the plugin will write to. Should be empty, do not store other data here.')
      .addText(text =>
        text
          .setPlaceholder('Enter your folder path from vault root')
          .setValue(this.plugin.settings.import_folder)
          .onChange(async value => {
            this.plugin.settings.import_folder = value;
            await this.plugin.saveSettings();
          })
      );
  }
}
