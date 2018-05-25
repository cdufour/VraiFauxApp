import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';

@IonicPage()
@Component({
  selector: 'page-option',
  templateUrl: 'option.html',
})
export class OptionPage {

  options = {
    level: [],
    category: [],
    effect: []
  }

  currentIndexes = {
    level: 0,
    category: 0,
    effect: 0
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private settingsProvider: SettingsProvider) {
  }

  changeOptionValue(type: string): void {
    if (this.currentIndexes[type] == this.options[type].length - 1) {
      this.currentIndexes[type] =
        this.settingsProvider.setCurrentIndex(type, 0);
    } else {
      this.currentIndexes[type] =
        this.settingsProvider.setCurrentIndex(type, this.currentIndexes[type] + 1);
    }
  }

  ionViewDidLoad() {
    this.options = this.settingsProvider.getOptions();
    this.currentIndexes = this.settingsProvider.getCurrentIndexes();
  }

  goToHome() {
    this.navCtrl.pop();
  }

}
