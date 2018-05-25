import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OptionPage } from '../option/option';
import { PlayPage } from '../play/play';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  goToOption() {
    this.navCtrl.push(OptionPage);
  }

  goToPlay() {
    this.navCtrl.push(PlayPage);
  }

}
