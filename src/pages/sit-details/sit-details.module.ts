import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SitDetailsPage } from './sit-details';

@NgModule({
  declarations: [
    SitDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SitDetailsPage), //setting up deep links
  ],
  entryComponents: [
    SitDetailsPage
  ]
})
export class SitDetailsPageModule {}
