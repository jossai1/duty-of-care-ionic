import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SharedServiceProvider} from "../../providers/shared-service/shared-service";

@Component({
  selector: 'page-about',
  templateUrl: 'check-in.html'
})
export class CheckInPage {

  constructor(public navCtrl: NavController,private  sharedService: SharedServiceProvider) {

  }

  // registers that the user has gotten home safely
  // should respond once it has been saved to db/sent to api successfully
  CheckInUser() {
    let currentUserID =  this.sharedService.getcurrentUserData();
    let userFound = this.sharedService.setHomeStatusOfCarer(currentUserID);
    if (userFound === true) {
      alert('Thanks for letting us know!');
    } else {
      alert('Could not find user');
    }
  }
}
