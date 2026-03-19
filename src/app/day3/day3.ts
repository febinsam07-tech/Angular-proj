import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-day3',
  imports: [FormsModule],
  templateUrl: './day3.html',
  styleUrl: './day3.css',
})
export class Day3 {

  
  msg = 'hello day3 is ready';
  r = "radio";

  display(s:string){
    alert("Button Clicked");
    console.log("Button Click");
    console.log(s);
  }

  changetext:string= 'Initial Text';

  newtext:string="hello";
}
