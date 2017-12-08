import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { DetailPage } from '../detail/detail';
import { VideoPage } from '../video/video';
import {FotoPage} from '../foto/foto';
import {ProfilPage} from '../profil/profil';
import { HomePage } from "../home/home";


@IonicPage() 
@Component({
  selector: 'page-wisata',
  templateUrl: 'wisata.html',
})
export class WisataPage {

  countries: any;
  countries1: any;
  errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider) {
    this.getwisata();
    this.getwisataheadline();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WisataPage');
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

  getwisata() {
    this.rest.getwisata()
      .subscribe(
      countries => this.countries = countries,
      error => this.errorMessage = <any>error);
  }

  getwisataheadline() {
    this.rest.getwisataheadline()
    .subscribe(
      countries1 => this.countries1 = countries1,
      error => this.errorMessage = <any>error);
  }

   openNavDetailsPage(c) {
    this.navCtrl.push(DetailPage, { itemCountries: c })
  }

}
