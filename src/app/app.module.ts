import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { JabarPage } from '../pages/jabar/jabar';
import { NasionalPage } from '../pages/nasional/nasional';
import { BisnisPage } from '../pages/bisnis/bisnis';
import { WisataPage } from '../pages/wisata/wisata';
import { GadgetPage } from '../pages/gadget/gadget';
import { OtomotifPage } from '../pages/otomotif/otomotif';
import { OlahragaPage } from '../pages/olahraga/olahraga';
import { VideoPage } from '../pages/video/video';
import { FotoPage } from '../pages/foto/foto';
import { ProfilPage } from '../pages/profil/profil';
import { KomentarPage } from '../pages/komentar/komentar';
import { FavoritPage } from '../pages/favorit/favorit';
import { SettingPage } from '../pages/setting/setting';
import { CommentPage} from '../pages/comment/comment';
import { ListPage } from '../pages/list/list';
import { DetailPage } from '../pages/detail/detail';
import { DetailvideoPage } from '../pages/detailvideo/detailvideo';
import { DetailfotoPage} from '../pages/detailfoto/detailfoto';
import { AddDataPage } from '../pages/add-data/add-data';

// import { SQLite } from '@ionic-native/sqlite';
// import { Toast } from '@ionic-native/toast';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { HttpClientModule } from '@angular/common/http';

import { SocialSharing } from '@ionic-native/social-sharing';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    JabarPage,
    NasionalPage,
    BisnisPage,
    WisataPage,
    GadgetPage,
    OtomotifPage,
    OlahragaPage,
    VideoPage,
    FotoPage,
    FavoritPage,
    ProfilPage,
    DetailPage,
    DetailvideoPage,
    DetailfotoPage,
    KomentarPage,
    CommentPage,
    SettingPage,
    AddDataPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // SQLite,
    // Toast,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    JabarPage,
    NasionalPage,
    BisnisPage,
    WisataPage,
    AddDataPage,
    GadgetPage,
    OtomotifPage,
    FavoritPage,
    OlahragaPage,
    VideoPage,
    FotoPage,
    CommentPage,
    DetailPage,
    DetailvideoPage,
    DetailfotoPage,
    KomentarPage,
    ProfilPage,
    SettingPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
