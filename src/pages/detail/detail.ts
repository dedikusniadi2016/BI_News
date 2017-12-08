import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { CommentPage } from "../comment/comment";
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  defaultItems: any;
  users: any;
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider,private socialSharing: SocialSharing) {

    this.item = navParams.get('itemCountries');
    console.log(this.item);
  }

    CommentPage() {
    this.navCtrl.push(CommentPage)
  }

  shareSheetShare() {
    this.socialSharing.share("Share message", "Share subject", "URL to file or image", "A URL to share").then(() => {
      console.log("shareSheetShare: Success");
    }).catch(() => {
      console.error("shareSheetShare: failed");
    });
  }



}
