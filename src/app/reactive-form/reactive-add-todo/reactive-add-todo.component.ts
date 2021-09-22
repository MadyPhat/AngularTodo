import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Priority } from './../../data/priority';
import { Todo } from 'src/app/interface/todo';
import { TodoService } from './../../service/todo.service';
import { Deadline } from './../../interface/deadline';

@Component({
  selector: 'app-reactive-add-todo',
  templateUrl: './reactive-add-todo.component.html',
  styleUrls: ['./reactive-add-todo.component.css']
})
export class ReactiveAddTodoComponent implements OnInit {


  submitted = false;
  todo: Todo[] = [];
  reactiveForm: any;
  priority: Array<string> = Priority;
  selectedDate: string = '';

  constructor(
    private todoService: TodoService,
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.reactiveForm = this._fb.group({
      title: [null, [Validators.required]],
      description: [null],
      deadline: [null],
      status: ['todo'],
      priority: ['low']
    })
  }

  dateToString(newDate: Deadline) {
    let year = newDate.year;
    let month = newDate.month;
    let day = newDate.day;

    this.reactiveForm.value.deadline = year+ '-'+ month + '-' + day;
    return this.reactiveForm.value.deadline;
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
    this.reactiveForm = this._fb.group({
      title: [null, [Validators.required]],
      description: [null],
      deadline: [null],
      status: ['todo'],
      priority: ['low']
    });
  }

  get title() {
    return this.reactiveForm.get('title');
  }

  submitHandler() {
    this.saveTodo(this.reactiveForm.value);
  }

}
