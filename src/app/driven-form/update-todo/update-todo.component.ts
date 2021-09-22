import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/service/todo.service';
import { Status } from './../../data/status';
import { Priority } from './../../data/priority';
import { Todo } from 'src/app/interface/todo';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {

currentTodo!: Todo;
message = '';
status: Array<string> = Status;
priority: Array<string> = Priority;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getTodo(this.route.snapshot.paramMap.get('id'));
  }

  getTodo(id: any){
    this.todoService.getATodo(id).subscribe(todo =>{
      this.currentTodo = todo;
      console.log(this.currentTodo);
    }, error =>{
      console.log(error);
    });
  }


  updateTodo(){
    this.todoService.updateTodo(this.currentTodo.id, this.currentTodo).subscribe(res =>{
      this.message = 'Updated';
      this.router.navigate(['/driven'])
    }, error =>{
      console.log(error);
    });
  }

  deleteTodo(){
    this.todoService.deleteTodo(this.currentTodo.id).subscribe(res =>{
      this.router.navigate(['driven']);
    })
  }
}
