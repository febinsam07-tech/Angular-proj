import { Component } from '@angular/core';
import { Mediatorapi } from '../mediatorapi';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { concatWith } from 'rxjs';

@Component({
  selector: 'app-day8',
  imports: [JsonPipe,FormsModule],
  templateUrl: './day8.html',
  styleUrl: './day8.css',
})
export class Day8 {
mydata:any;
dataedit:any;
idnum:any
  constructor(private mediator:Mediatorapi,private route:Router,private rote:ActivatedRoute){ } 

  ngOnInit():void {
    // const id=this.rote.snapshot.paramMap.get('id');
    // console.log("Editing todo with id " +id);
    // this.idnum=id;
    this.mediator.getTodos().subscribe((data:any) => {
      console.log(data);
      this.mydata=data;
    });
  } //to oad the data when a page loads

  editTodo(id:number){
    console.log("Editing todo with id "+ id);
   this.geteditData(id);
  }


  geteditData(id:number){
   this.mediator.editTodo(id).subscribe((data:any) =>{
      console.log(data)
    // this.route.navigate(['/D8',id])
  this.dataedit=data;
  this.idnum=data.id;

  console.log("////////"+this.idnum)
    });

  }
  saveUpdate() {
    console.log(".................")
   
      // Calls the PUT method in mediatorapi.ts
      this.mediator.updateTodo(this.idnum, this.dataedit).subscribe({
        next: (response) => {
          console.log("Update successful:", response);
          this.dataedit = null; // Hide form after save
          this.ngOnInit()
        },
        error: (err) => {
          console.error("Update failed:", err);
        }
      });
    
  }
}
