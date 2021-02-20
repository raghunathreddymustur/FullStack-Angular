import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllusersService } from '../service/data/allusers.service';
export class Todo{
  constructor(
    public id:number,
    public username:string,
    public description:string,
    public targetDate:Date,
    public done:boolean
  ){}
}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos:Todo[] | undefined
  deleteSuccessMsg:string
  constructor(private aut:AllusersService,private router:Router) { }

  ngOnInit(): void {
     this.refreshTodos()
  }
  refreshTodos()
  {
    this.aut.getAllUsersTodos().subscribe(
      response => {this.todos=response
      console.log(response)
      }
      
    )
  }
  deleteById(todoId:number)
  {
    this.aut.deleteById(todoId).subscribe(
      response=>{
        console.log(response)
        this.deleteSuccessMsg=`Todo ${todoId} Successfully Deleted`
        this.refreshTodos()
        
      }
    )
  }
  updateById(todoId:number)
  {
    this.router.navigate([`/todos/addorupdate/${todoId}`])
    this.refreshTodos()
  }
  addById()
  {
    this.router.navigate(["/todos/addorupdate/-1"])
    this.refreshTodos()
  }
}
