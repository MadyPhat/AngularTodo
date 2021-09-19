import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DrivenFormTodoService } from './../service/driven-form-todo.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {

currentTodo: any = null;
message = '';
status = ['todo', 'in progress', 'pending', 'completed', 'closed'];
priority = ['low','normal', 'medium', 'high', 'urgent'];

  constructor(
    private drivenTodoService: DrivenFormTodoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getTodo(this.route.snapshot.paramMap.get('id'));
  }

  getTodo(id: any){
    this.drivenTodoService.getATodo(id).subscribe(todo =>{
      this.currentTodo = todo;
      console.log(this.currentTodo);
    }, error =>{
      console.log(error);
    });
  }

  setAvailableStatus(status: any): void {
    const data = {
      title: this.currentTodo.title,
      description: this.currentTodo.description,
      completed: status
    };

    this.drivenTodoService.updateTodo(this.currentTodo.id, data).subscribe(res =>{
      this.currentTodo.completed = status;
    })
  }

  updateTodo(){
    this.drivenTodoService.updateTodo(this.currentTodo.id, this.currentTodo).subscribe(res =>{
      this.message = 'Updated';
      this.router.navigate(['/driven'])
    }, error =>{
      console.log(error);
    });
  }

  deleteTodo(){
    this.drivenTodoService.deleteTodo(this.currentTodo.id).subscribe(res =>{
      console.log(res);
      this.router.navigate(['driven']);
    })
  }
}
