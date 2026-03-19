import { Component } from '@angular/core';
import { Mediatorapi } from '../mediatorapi';


@Component({
  selector: 'app-day7',
  imports: [],
  templateUrl: './day7.html',
  styleUrl: './day7.css',
})
export class Day7 {
  mydata:any;
  constructor(private mediator:Mediatorapi){ } 
  ngOnInit():void {
    this.mediator.getTodos().subscribe((data:any) => {
      console.log(data);
      this.mydata=data;
    });
  } //to oad the data when a page loads

  deleteTodo(id:number){
    console.log("Deleting todo with id "+ id);
    this.mediator.deleteTodo(id).subscribe((response:any) => {
      console.log(response);
      //after deletiion refresh todo list
      alert("Todo delete succesfully");
      this.ngOnInit();
    });
  }
}
