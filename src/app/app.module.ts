import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CheckInPage } from '../pages/check-in/check-in';
import { LogsPage } from '../pages/my-logs/logs';
import { SitsHomePage } from '../pages/sits-home/sits-home-page.component';
import { TabsPage } from '../pages/tabs/tabs';
import { AdminDashboardPage } from '../pages/admin-dashboard/admin-dashboard';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SharedServiceProvider } from '../providers/shared-service/shared-service';

@NgModule({
  declarations: [
    MyApp,
    CheckInPage,
    LogsPage,
    SitsHomePage,
    AdminDashboardPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CheckInPage,
    LogsPage,
    SitsHomePage,
    AdminDashboardPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SharedServiceProvider
  ]
})
export class AppModule {}
