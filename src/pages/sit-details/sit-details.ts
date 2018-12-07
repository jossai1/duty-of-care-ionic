import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SharedServiceProvider} from "../../providers/shared-service/shared-service";
import {SitsHomePage} from "../sits-home/sits-home-page.component";


/**
 * Generated class for the SitDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'sit-details',
  segment: 'sit-details/:id'
})
@Component({
  selector: 'page-sit-details',
  templateUrl: 'sit-details.html',
})
export class SitDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private  sharedService: SharedServiceProvider) {
  }

  sit: any;
  sitID: string;

  ionViewDidLoad() {

    console.log(this.navParams);
    this.sitID = this.navParams.data.id;

    let sitResult = this.sharedService.findSitByID(this.sitID);
    console.log('sit result: ', sitResult);

    if (sitResult) {
      this.sit = sitResult;
    } else {
      alert('Sit not found! please enter a valid sit id');
      this.navCtrl.push(SitsHomePage);
    }

    console.log('ionViewDidLoad SitDetailsPage');
  }

  userLeftSit() {
    let currentUserID =  this.sharedService.getcurrentUserData();
    let userFound = this.sharedService.setLeftStatusOfCarer(currentUserID, this.sitID);
    console.log(userFound);
    if (userFound === true) {
      alert('Thanks for letting us know!');
      this.navCtrl.push(SitsHomePage);
    } else {
      alert('Could not find user');
    }
  }


}
