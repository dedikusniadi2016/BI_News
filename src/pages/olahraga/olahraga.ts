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
  selector: 'page-olahraga',
  templateUrl: 'olahraga.html',
})
export class OlahragaPage {

  countries: any;
  countries1: any;
  errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider) {
    this.getolahraga();
    this.getolahragaheadline();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OlahragaPage');
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
    this.navCtrl.push(DetailPage, { itemCountries: c })
  }

  getolahraga() {
    this.rest.getolahraga()
      .subscribe(
      countries => this.countries = countries,
      error => this.errorMessage = <any>error);
  }

  getolahragaheadline() {
    this.rest.getolahragaheadline()
    .subscribe(
      countries1 => this.countries1 = countries1,
      error => this.errorMessage = <any>error);
  }
}
