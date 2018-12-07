import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SharedServiceProvider} from "../../providers/shared-service/shared-service";

@Component({
  selector: 'page-home',
  templateUrl: 'sits-home-page.component.html'
})
export class SitsHomePage {

  constructor(public navCtrl: NavController, private  sharedService: SharedServiceProvider) {

  }
  sitsArray: Array<any> = [];

  carersArray: Array<any> = [];

  carerSitArray : Array<any> = [];

  ionViewDidLoad() {
   this.sitsArray = this.sharedService.getSitsArray();
   this.carersArray = this.sharedService.getCarersArray();
   this.carerSitArray = this.sharedService.getCarerSitsArray();
  }

  goToSitDetailPage(sitID: string) {
    this.navCtrl.push('sit-details', {
      'id': sitID
    })

  }
}
