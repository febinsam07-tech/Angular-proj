import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { OnePipe } from '../one-pipe';

@Component({
  selector: 'app-day4.1',
  imports: [JsonPipe,UpperCasePipe,LowerCasePipe,CurrencyPipe,DatePipe,OnePipe],
  templateUrl: './day4.1.html',
  styleUrl: './day4.1.css',
})
export class Day41 {

  emp={
    name:'John Doe',
    dob:"11-05-1990",
    salary:50000
  }

}
