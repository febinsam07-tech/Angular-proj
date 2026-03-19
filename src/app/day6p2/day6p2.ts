import { Component } from '@angular/core';
import { Mediator } from '../mediator';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-day6p2',
  imports: [JsonPipe],
  templateUrl: './day6p2.html',
  styleUrl: './day6p2.css',
})
export class Day6p2 {

  constructor(private mid:Mediator){}

  mydata:any;
  
  ngOnInit(){
    console.log('----------------- DAY6 PART2-----------');
    this.mydata =this.mid.senddatatoC2();
    console.log("data in C2", this.mydata);

  }
}
