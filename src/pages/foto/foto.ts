import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { VideoPage } from '../video/video';
import {ProfilPage} from '../profil/profil';
import {HomePage} from '../home/home';
import { SocialSharing } from '@ionic-native/social-sharing';
import { DetailfotoPage } from '../detailfoto/detailfoto';


@IonicPage()
@Component({
  selector: 'page-foto',
  templateUrl: 'foto.html',
})
export class FotoPage {

  countries: any; 
  errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider,private socialSharing: SocialSharing) {
    this.getfoto();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
  }

  HomePage() {
    this.navCtrl.push(HomePage)
  }

  VideoPage() {
    this.navCtrl.push(VideoPage)
  }

  FotoPage() {
    this.navCtrl.push(FotoPage)
  }

  ProfilPage() {
    this.navCtrl.push(ProfilPage)
  }

    openNavDetailsPage(c) {
    this.navCtrl.push(DetailfotoPage, { itemCountries: c })
  }

  getfoto() {
    this.rest.getfoto()
      .subscribe(
      countries => this.countries = countries,
      error => this.errorMessage = <any>error);
  }


  shareSheetShare() {
    this.socialSharing.share("Share message", "Share subject", "URL to file or image", "A URL to share").then(() => {
      console.log("shareSheetShare: Success");
    }).catch(() => {
      console.error("shareSheetShare: failed");
    });
  }

}
