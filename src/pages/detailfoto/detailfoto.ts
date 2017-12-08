import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-detailfoto',
  templateUrl: 'detailfoto.html',
})
export class DetailfotoPage {
  
  defaultItems: any;
  users: any;
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {

    this.item = navParams.get('itemCountries');
    console.log(this.item);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailfotoPage');
  }

}
