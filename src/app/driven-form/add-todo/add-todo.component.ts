import { Component, OnInit } from '@angular/core';

import { DrivenFormTodoService } from '../service/driven-form-todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private drivenFormTodo: DrivenFormTodoService) { }

  submitted = false;
  todo: any = []
  ngOnInit(): void { }

  saveTodo(data: any) {
    this.drivenFormTodo.addTodo(data).subscribe(res => {
      this.submitted = true;
      this.todo = res;
    }, error => {
      console.log(error);
    });
  }

  newTodo() {
    this.submitted = false;
    this.todo = {
      title: '',
      description: '',
      deadline: '',
    };
  }

  submitHandler(form: any) {
    this.saveTodo(form.value);
    console.log(form.value.deadline);
  }

}