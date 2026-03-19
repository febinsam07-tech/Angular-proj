import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Mediatorapi {
  constructor(private http:HttpClient){}
  apiUrl:string="http://127.0.0.1:8000/todo/"; //provide the ink from the django server and paste in the apiUrl variable

  saveTodo(data:any){
    return this.http.post(this.apiUrl, data);
  }

  getTodos(){
    return this.http.get(this.apiUrl)
  }

  deleteTodo(id:number){
    return this.http.delete(this.apiUrl + id + "/");
  }

  editTodo(id:number){
    return this.http.get(this.apiUrl+id+"/")
  }

  updateTodo(id: number, data: any) {
  // This matches your Django 'put(self, request, pk)' logic
  return this.http.put(this.apiUrl + id + "/", data);
}
}
