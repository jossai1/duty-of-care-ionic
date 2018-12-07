import { Injectable } from '@angular/core';

/*
  Generated class for the SharedServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharedServiceProvider {

  constructor() {
    console.log('Hello SharedServiceProvider Provider');
  }

  currentUserData: any = {carerID: '1'};

  sitsArray: Array<any> = [
    {sitID: '123', date:'06/12/2018', time: '13:00', place:'Dorset', visitType: 'COMMUNITY_SIT', patientID: '13', bookedHours: 2.00, staffAttending: [{carerID:'2'}, {carerID:'1'}]},
    {sitID: '456', date:'07/12/2018', time: '15:00', place:'Poole', visitType: 'COMMUNITY_SIT', patientID: '45', bookedHours: 1.00, staffAttending: [{carerID:'3'}, {carerID:'4'}]},
    {sitID: '789', date:'08/12/2018', time: '19:00', place:'Poole', visitType: 'COMMUNITY_SIT', patientID: '45', bookedHours: 3.50, staffAttending: [{carerID:'3'}, {carerID:'4'}]},
    {sitID: '422', date:'09/12/2018', time: '07:00', place:'Wilthshire', visitType: 'COMMUNITY_SIT', patientID: '54', bookedHours: 5.00, staffAttending: [{carerID:'3'}, {carerID:'4'}]},
    {sitID: '908', date:'10/12/2018', time: '08:00', place:'Southampton', visitType: 'COMMUNITY_SIT', patientID: '45', bookedHours: 1.00, staffAttending: [{carerID:'3'}, {carerID:'4'}]},
    {sitID: '1254',date:'11/12/2018',  time: '17:00', place:'Wareham', visitType: 'COMMUNITY_SIT', patientID: '65', bookedHours: 1.00, staffAttending: [{carerID:'3'}, {carerID:'4'}]},
    {sitID: '7897',date:'09/12/2018',  time: '09:00', place:'Fordingbridde', visitType: 'COMMUNITY_SIT', patientID: '34', bookedHours: 1.00, staffAttending: [{carerID:'3'}, {carerID:'4'}]}
  ];

  carersArray: Array<any> = [
    {carerID: '1',name:'Sally', homeStatus: false},
    {carerID: '2',name:'John', homeStatus: false},
    {carerID: '3',name:'Megan', homeStatus: false}
  ];

  carerSitsArray : Array<any> = [
    {sitID: '123', carerID: '1', leftStatus: false},
    {sitID: '123', carerID: '2', leftStatus: false},
    {sitID: '456', carerID: '1', leftStatus: false},
    {sitID: '456', carerID: '2', leftStatus: false},
    {sitID: '789', carerID: '1', leftStatus: false}
  ];


  setHomeStatusOfCarer(carerID) : boolean {
    let userFound = false;
    this.carersArray.forEach((carerObj) => {
      if (carerObj.carerID === carerID){
        carerObj.homeStatus = true;
        console.log('carerID: ' + carerID + 'is home:', carerObj);
        userFound = true;
      }
    });
    return userFound;
  }

  setLeftStatusOfCarer(carerID, sitID) : boolean {
    let userFound = false;
    this.carerSitsArray.forEach((carerSitObj) => {
      if (carerSitObj.carerID === carerID && carerSitObj.sitID === sitID) {
        carerSitObj.leftStatus = true;
        console.log('carerID:  ' + carerID + ' has left sit', carerSitObj);
        userFound = true;
      }
    });
    return userFound;
  }
  getcurrentUserData(): any {
    return this.currentUserData.carerID;
  }

  setcurrentUserData(value: any) {
    this.currentUserData = value;
  }


  getSitsArray () : Array<any>{
    return this.sitsArray;
  }

  getCarersArray () : Array<any>{
    return this.carersArray;
  }

  getCarerSitsArray () : Array<any>{
    return this.carerSitsArray;
  }

  getHomeStatus(carerID) {
    let homeStatus = null;
    this.carersArray.forEach((carerObj) => {
      if (carerObj.carerID === carerID){
        homeStatus  = carerObj.homeStatus;
      }
    });
    return homeStatus;
  }

  getCarer(carerID) {
    let carer = null;
    this.carersArray.forEach((carerObj) => {
      if (carerObj.carerID === carerID){
        carer  = carerObj;
      }
    });
    return carer;
  }

  setSitsArray (newSitsArray: Array<any>){
    this.sitsArray = newSitsArray;
  }

  setCarersArray (newCarerArray: Array<any>){
    this.carersArray = newCarerArray;
  }

  setCarerSitArray (newCarerSitArray: Array<any>){
    this.carerSitsArray = newCarerSitArray;
  }

  findSitByID(sitID: string) :  any {
    let sitFound: any = null;
    this.sitsArray.forEach( (sit) => {
      if (sit.sitID === sitID){
        sitFound = sit;
      }
    });
    return sitFound;
  }


}
