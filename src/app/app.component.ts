import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { JabarPage } from '../pages/jabar/jabar';
import { NasionalPage } from '../pages/nasional/nasional';
import { BisnisPage } from '../pages/bisnis/bisnis';
import { WisataPage } from '../pages/wisata/wisata';
import {GadgetPage} from '../pages/gadget/gadget';
import {OtomotifPage} from '../pages/otomotif/otomotif';
import {OlahragaPage} from '../pages/olahraga/olahraga';

// import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Kabar Jabar', component: JabarPage },
      { title: 'Kabar Nasional', component: NasionalPage },
      { title: 'Bisnis', component: BisnisPage },
      { title: 'Wisata', component: WisataPage },
      { title: 'Otomotif', component: OtomotifPage },
      { title: 'Gadget', component: GadgetPage },
      { title: 'Olahraga', component: OlahragaPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
