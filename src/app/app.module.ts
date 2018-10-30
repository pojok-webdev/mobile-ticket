import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TicketProvider } from '../providers/ticket/ticket';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { SettingPage } from '../pages/setting/setting';
import { AppvarProvider } from '../providers/appvar/appvar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SettingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TicketProvider,
    HttpClient,
    AppvarProvider
  ]
})
export class AppModule {}
