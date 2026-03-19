import { Component } from '@angular/core';

@Component({
  selector: 'app-dayy2',
  imports: [],
  templateUrl: './dayy2.html',
  styleUrl: './dayy2.css',
})
export class Dayy2 {

  new = 'hello day2 is ready';
  f = "file";
  r = "radio";

  display(s:string){
    alert("Button Clicked");
    console.log("Button Click");
    console.log(s);
  }

}
