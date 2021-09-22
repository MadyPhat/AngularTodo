import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from 'src/app/interface/todo';
import { Priority } from './../../data/priority';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  submitted = false;
  priority: Array<string> = Priority;
  todo: Todo[] = [];
  defaultPrioritySelect = 'low';
  
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  setDefaultStatusValue( form: NgForm){
    form.value.status = 'todo';
  }

  setDefaultPriorityValue( form: NgForm){
    form.value.priority = 'low';
  }
  saveTodo(data: Todo) {
    this.todoService.addTodo(data).subscribe(res => {
      this.submitted = true;
      this.todo = res;
    }, error => {
      console.log(error);
    });
  }

  newTodo() {
    this.submitted = false;
  }


  submitHandler(form: NgForm) {
    if(form.value.priority !== ''){
      this.setDefaultStatusValue(form);
      this.saveTodo(form.value);
    }else{
      this.setDefaultStatusValue(form);
      this.setDefaultPriorityValue(form);
      this.saveTodo(form.value);
    }
  }

}
