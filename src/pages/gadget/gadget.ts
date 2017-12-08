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
  selector: 'page-gadget',
  templateUrl: 'gadget.html',
})
export class GadgetPage {

  countries: any;
  countries1: any;
  errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider) {
    this.getgadget();
    this.getgadgetheadline();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GadgetPage');
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

  getgadget() {
    this.rest.getgadget()
      .subscribe(
      countries => this.countries = countries,
      error => this.errorMessage = <any>error);
  }

  getgadgetheadline() {
    this.rest.getgadgetheadline()
    .subscribe(
      countries1 => this.countries1 = countries1,
      error => this.errorMessage = <any>error);
  }

  openNavDetailsPage(c) {
    this.navCtrl.push(DetailPage, { itemCountries: c })
  }


}
