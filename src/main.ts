import { Plugin } from 'obsidian';
import { PocketbookCloudHighlightsImporter } from './import';
import { DEFAULT_SETTINGS, PocketbookCloudHighlightsImporterPluginSettings, PocketbookCloudHighlightsImporterSettingTab } from './settings';

export default class PocketbookCloudHighlightsImporterPlugin extends Plugin {
  settings: PocketbookCloudHighlightsImporterPluginSettings;
  importer: PocketbookCloudHighlightsImporter;

  async onload() {
    await this.loadSettings();
    this.importer = new PocketbookCloudHighlightsImporter(this.app, this, this.settings);

    // This adds a simple command that can be triggered anywhere
    this.addCommand({
      id: 'perform-import',
      name: 'Import highlights & notes',
      callback: () => {
        this.importer.importHighlights();
      },
    });

    // This adds a settings tab so the user can configure various aspects of the plugin
    this.addSettingTab(new PocketbookCloudHighlightsImporterSettingTab(this.app, this));
  }

  onunload() {}

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    // this gets serialized as a string under the hood - this is to restore it to a Date object. Probably not the best way to do this, happy to learn how to do this better
    this.settings.access_token_valid_until = new Date(this.settings.access_token_valid_until);
  }

  async saveSettings() {
    await this.saveData(this.settings);
    this.importer = new PocketbookCloudHighlightsImporter(this.app, this, this.settings);
  }
}
