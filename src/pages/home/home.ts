import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VideoPage } from '../video/video';
import {FotoPage} from '../foto/foto';
import {ProfilPage} from '../profil/profil';
import { DetailPage } from '../detail/detail';
import { RestProvider } from '../../providers/rest/rest';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  countries: any;
  countries1: any; 
  errorMessage: string;

  constructor(public navCtrl: NavController, public rest: RestProvider) {
    this.getheadline();
    this.getterbaru();
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

  getheadline() {
    this.rest.getheadline()
       .subscribe(
         countries => this.countries = countries,
         error =>  this.errorMessage = <any>error);
  }

  getterbaru() {
    this.rest.getterbaru()
    .subscribe(
      countries1 => this.countries1 = countries1,
      error => this.errorMessage = <any>error);
  }

}
