import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionProvider } from '../../providers/question/question';
import { SettingsProvider } from '../../providers/settings/settings';
import { Question } from '../../model/Question';
import { EndPage } from '../end/end';

import { AlertController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';


@IonicPage()
@Component({
  selector: 'page-play',
  templateUrl: 'play.html',
})
export class PlayPage {

  playerData = {
    life: 0,
    joker: 0,
    score: 0
  }

  currentQuestion: Question =
    new Question(0, '', false, '', '', '', '');

  isAnswerGiven: boolean = false;
  isAnswerCorrect: boolean = false;
  gameOver: boolean = false;
  isActionBarVisible: boolean = true;
  isUsedJoker: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private questionProvider: QuestionProvider,
    private settingsProvider: SettingsProvider,
    private alertCtrl: AlertController,
    private vibration: Vibration) {
  }

  ionViewDidLoad() {
    this.currentQuestion =
      this.questionProvider.getRandom();

    this.playerData =
      this.settingsProvider.getPlayerData();
  }

  private nextQuestion() {
    this.isUsedJoker = false;
    this.isAnswerGiven = false;
    this.isActionBarVisible = true;

    this.currentQuestion =
      this.questionProvider.getRandom();
  }

  checkAnswer(val: boolean) {
    this.isAnswerGiven = true;
    this.isActionBarVisible = false;

    if (val == this.currentQuestion.correct) {
      // SUCCESS
      this.isAnswerCorrect = true;
      this.playerData.score++;

    } else {
      // FAILURE
      this.isAnswerCorrect = false;
      this.playerData.life--;

      if (this.playerData.life == 0) {
        this.gameOver = true;
        //this.navCtrl.push(EndPage);
      }

      this.vibration.vibrate(500);
    }

    if (this.questionProvider
      .removeQuestion(this.currentQuestion.id) == 0) {
        this.goToEnd();
      }

  }

  goToEnd() {
    this.navCtrl.push(EndPage);
  }

  useJoker() {
    this.showConfirm();
  }

  showConfirm() {
   let confirm = this.alertCtrl.create({
     title: '',
     message: 'Passer cette question ?',
     buttons: [
       {
         text: 'NON',
         handler: () => {}
       },
       {
         text: 'OUI',
         handler: () => {
           this.consumeJoker();
         }
       }
     ]
   });
   confirm.present();
 }

 consumeJoker() {
   this.playerData.joker--;
   this.giveCorrectAnswer();
 }

 giveCorrectAnswer() {
   this.isUsedJoker = true;
   this.isActionBarVisible = false;

   if (this.questionProvider
     .removeQuestion(this.currentQuestion.id) == 0) {
       this.goToEnd();
     }
 }

}
