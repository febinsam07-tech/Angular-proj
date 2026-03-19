import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Mediatorapi } from '../mediatorapi';
import { Router } from '@angular/router';

@Component({
  selector: 'app-day6.0',
  imports: [FormsModule],
  templateUrl: './day6.0.html',
  styleUrl: './day6.0.css',
})
export class Day60 {
  register(formValue: { title?: string }) {
    console.log('Form submitted:', formValue);
  }
  constructor(private mediatorapi:Mediatorapi, private route:Router){}
  create(todo:any){
    console.log(todo);

    this.mediatorapi.saveTodo(todo).subscribe(
      (response:any) => {
        console.log("Todo item saved succesfuly",response);
        alert("Todo-saved and redirecting")
        this.route.navigate(['/D7']);
      },
      (error:any) => {
        console.log("Error saving todo list",error);
      },
    )
  }
}
