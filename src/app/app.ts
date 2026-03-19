import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Day1 } from './day1/day1';
import { Day2 } from './day2/day2';
import { Dayy2 } from './dayy2/dayy2';
import { Day3 } from './day3/day3';
import { Day4 } from './day4/day4';
import { Day41 } from './day4.1/day4.1';
import { Day6 } from './day6/day6';
import { Day6p2 } from './day6p2/day6p2';
import { Day7 } from './day7/day7';
import { Day8 } from './day8/day8';
// import { Day5 } from './day5/day5';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule],  // Day1,Day2,Dayy2,Day3,Day4,Day41,Day5,Day6,Day6p2,Day7,Day8
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angproject');
}
