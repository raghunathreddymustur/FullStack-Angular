import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllusersService } from '../service/data/allusers.service';
import { Todo, TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-addupdate',
  templateUrl: './addupdate.component.html',
  styleUrls: ['./addupdate.component.css']
})
export class AddupdateComponent implements OnInit {
  todo:Todo
  id:number
  constructor(private allUserService:AllusersService,private router:ActivatedRoute,private rou:Router) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params['id']
    this.todo=new Todo(this.id,"user",'',new Date(),false)
    if(this.id!=-1)
    {
    this.allUserService.retrieveById(this.id).subscribe(
      data=>{
        this.todo=data

      }
    )
  }
}
  updateTodo(id:number,todo:Todo)
  {
    if(this.id==-1)
    {
      this.allUserService.addById(todo).subscribe(
        data=>{
          console.log(data)
        }
      )
      this.rou.navigate(['/mytodos'])
    }
    else
    {
      this.allUserService.updateById(id,todo).subscribe(
        data=>{
          console.log(data)
        }
      )
      this.rou.navigate(['/mytodos'])
    }
    
  }

}
