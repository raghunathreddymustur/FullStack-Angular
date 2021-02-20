import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddupdateComponent } from 'src/app/addupdate/addupdate.component';
import { Todo } from 'src/app/todo-list/todo-list.component';

@Injectable({
  providedIn: 'root'
})
export class AllusersService {

  constructor(private http:HttpClient) { }
  getAllUsersTodos(){
    return this.http.get<Todo[]>("http://localhost:8080/jpa/alltodos")
  }
  deleteById(id:number)
  {
    return this.http.delete(`http://localhost:8080/jpa/todos/delete/${id}`)
  }
  retrieveById(id:number)
  {
    return this.http.get<Todo>(`http://localhost:8080/jpa/todos/getbyid/${id}`)
  }
  updateById(id:number,todo:Todo)
  {
    return this.http.put(`http://localhost:8080/jpa/todos/updatetodo/${id}`,todo)
  }
  addById(todo:Todo)
  {
    return this.http.post("http://localhost:8080/jpa/todos/addtodo",todo)
  }
}
