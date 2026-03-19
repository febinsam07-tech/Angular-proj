import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Mediator } from '../mediator';

@Component({
  selector: 'app-day6',
  imports: [FormsModule],
  templateUrl: './day6.html',
  styleUrl: './day6.css',
})
export class Day6 {

  constructor(private mid: Mediator){}

  register(data:any){
    console.log(data);
    this.mid.getdataformC1(data)
  }
}
