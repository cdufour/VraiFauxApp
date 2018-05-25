import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OptionPage } from '../pages/option/option';
import { PlayPage } from '../pages/play/play';
import { EndPage } from '../pages/end/end';

import { SettingsProvider } from '../providers/settings/settings';
import { QuestionProvider } from '../providers/question/question';

import { Vibration } from '@ionic-native/vibration';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OptionPage,
    PlayPage,
    EndPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OptionPage,
    PlayPage,
    EndPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingsProvider,
    QuestionProvider,
    Vibration
  ]
})
export class AppModule {}
