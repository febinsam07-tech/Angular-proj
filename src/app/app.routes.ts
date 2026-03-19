import { Routes } from '@angular/router';
import { Day2 } from './day2/day2';
import { Day1 } from './day1/day1';
import { Dayy2 } from './dayy2/dayy2';
import { Day3 } from './day3/day3';
import { Day31 } from './day3.1/day3.1';
import { Day4 } from './day4/day4';
import { Day41 } from './day4.1/day4.1';
// import { Day5 } from './day5/day5';
import { Day6 } from './day6/day6';
import { Day6p2 } from './day6p2/day6p2';
import { Day60 } from './day6.0/day6.0';
import { Day7 } from './day7/day7';
import { Day8 } from './day8/day8';

export const routes: Routes = [

    {path:'D1',component:Day1},
    {path:'D2',component:Day2},
    {path:'D2.0',component:Dayy2},
    {path:'D3',component:Day3},
    {path:'D3.1',component:Day31},
    {path:'D4',component:Day4},
    {path:'D4.1',component:Day41},
    // {path:'D5',component:Day5},
    {path:'D6',component:Day6},
    {path:'D6p2',component:Day6p2},
    {path:'D6.0',component:Day60},
    {path:'D7',component:Day7},
    {path:'D8',component:Day8},





];
