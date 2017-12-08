import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { DetailPage } from '../detail/detail';
import { VideoPage } from '../video/video';
import {FotoPage} from '../foto/foto';
import {ProfilPage} from '../profil/profil';
import { HomePage } from "../home/home";


@IonicPage()
@Component({
  selector: 'page-jabar', 
  templateUrl: 'jabar.html',
}) 
export class JabarPage {

  countries: any; 
  countries1: any;      
  errorMessage: string;    

  constructor(public navCtrl: NavController, public rest: RestProvider) {
    this.getJabar();
    this.getjabarheadline();
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad JabarPage');
  }

   openNavDetailsPage(c) {
    this.navCtrl.push(DetailPage, { itemCountries: c })
  }

  getJabar() {
    this.rest.getJabar()
      .subscribe(
      countries1 => this.countries1 = countries1,
      error => this.errorMessage = <any>error);
  }

  getjabarheadline() {
    this.rest.getjabarheadline()
    .subscribe(
      countries => this.countries = countries,
      error => this.errorMessage = <any>error);
  }


}
