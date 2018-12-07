import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SharedServiceProvider} from "../../providers/shared-service/shared-service";

/**
 * Generated class for the AdminDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-admin-dashboard',
  templateUrl: 'admin-dashboard.html',
})
export class AdminDashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private  sharedService: SharedServiceProvider) {
  }

  username: string;
  password: string;
  showDashboard: boolean = false;
  carerSitArray : any[];

  ionViewWillEnter() {
    this.carerSitArray = this.sharedService.getCarerSitsArray();
    this.getCarerObjects();
    console.log('ionViewDidLoad AdminDashboardPage');
  }


  adminLogin() {
    if (this.username == 'admin' && this.password == '123') {
      this.showDashboard = true;
    }
  }

  getHomeStatus(carerID) {
    let homeStatusResult = this.sharedService.getHomeStatus(carerID);

    if (homeStatusResult){
      return homeStatusResult;
    } else {
      return'not found';
    }
  }

  getCarerObj(carerID) {
    return this.sharedService.getCarer(carerID);
  }

  carersArray = [];
  private getCarerObjects() {
    this.carerSitArray.forEach( (csObj) => {
      let carerObjResult = this.sharedService.getCarer(csObj.carerID);
      if (carerObjResult){
        this.carersArray.push(carerObjResult);
      } else {
        console.log('from get caerer Objects');
      }
    });
  }
}
