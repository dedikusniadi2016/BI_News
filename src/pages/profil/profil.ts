import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KomentarPage } from '../komentar/komentar';
import { FavoritPage } from '../favorit/favorit';
import { SettingPage } from '../setting/setting';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

HomePage() {
  this.navCtrl.push(HomePage)
}

  KomentarPage() {
    this.navCtrl.push(KomentarPage)
  }

  FavoritPage() {
    this.navCtrl.push(FavoritPage)
  }

  SettingPage() {
    this.navCtrl.push(SettingPage)
  }

   doPrompt() {
    let alert = this.alertCtrl.create({
      message: 'Login Untuk Mengaktifkan lebih Banyak fitur ',
      cssClass: 'alertDanger',
      buttons: [
        {
          text: 'Login Dengan Facebook',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login Dengan Twitter',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login Dengan Google',
          handler: () => {
            console.log('Saved clicked');
          }
        }
      ]
    });

    alert.present();
  }


  

}
