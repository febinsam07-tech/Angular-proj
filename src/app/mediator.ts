import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Mediator {

  senddata:any;

  getdataformC1(frmC1:any){
    console.log("data from C1",frmC1);

    this.senddata = frmC1
  }
  
  senddatatoC2(){
    console.log("data to C2");
    return this.senddata;
  }
}
