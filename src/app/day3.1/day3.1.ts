import { Component } from '@angular/core';

@Component({
  selector: 'app-day3.1',
  imports: [],
  templateUrl: './day3.1.html',
  styleUrl: './day3.1.css',
})
export class Day31 {

 is_visible:boolean = true;
 time:number=20;

places :string[] = ['NEW YORK','LONDON','PARIS','TOKYO','ITALY'];

student :any[]=[
  { name:'Alice' , age:20 , grade:'A'},
  { name:'Bob' , age:22 , grade:'C'},
  { name:'Charlie' , age:21 , grade:'B'},
];

}
