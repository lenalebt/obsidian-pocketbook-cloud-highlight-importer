import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import { PocketbookCloudHighlightsImporter } from './import';
import { DEFAULT_SETTINGS, PocketbookCloudHighlightsImporterPluginSettings, PocketbookCloudHighlightsImporterSettingTab } from './settings';

// Remember to rename these classes and interfaces!

export default class PocketbookCloudHighlightsImporterPlugin extends Plugin {
  settings: PocketbookCloudHighlightsImporterPluginSettings;
  importer: PocketbookCloudHighlightsImporter;

  async onload() {
    await this.loadSettings();
    this.importer = new PocketbookCloudHighlightsImporter(this.app, this, this.settings);

    // This adds a simple command that can be triggered anywhere
    this.addCommand({
      id: 'pocketbook-cloud-importer-perform-import',
      name: 'Pocketbook Cloud: Import highlights & notes',
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
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}
