import { Component, OnInit } from '@angular/core';
export class Todo{
  constructor(
    public id:number,
    public description:string,
    public targetDate:Date,
    public isDone:boolean
  ){}
}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos=[
    new Todo(1,'mastercp',new Date(),false),
    new Todo(2,'master full stack',new Date(),false),
    new Todo(3,'learn engineering sub',new Date(),false)
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
