import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from './../../service/todo.service';
import { Todo } from './../../interface/todo';
import { Priority } from './../../data/priority';
import { Status } from './../../data/status';
import { Deadline } from 'src/app/interface/deadline';

@Component({
  selector: 'app-reactive-update-todo',
  templateUrl: './reactive-update-todo.component.html',
  styleUrls: ['./reactive-update-todo.component.css']
})
export class ReactiveUpdateTodoComponent implements OnInit {

  currentTodo: Todo | undefined;
  message = '';
  priority: Array<string> = Priority;
  status: Array<string> = Status;
  reactiveForm: any;

  constructor(
    private todoSerive: TodoService,
    private route: ActivatedRoute,
    private router: Router,
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.message ='';
    this.getTodo(this.route.snapshot.paramMap.get('id'));
    console.log(this.currentTodo);

    this.reactiveForm = this._fb.group({
      title: [null, [Validators.required]],
      description: [null],
      deadline: [null],
      status: [null],
      priority: [null]
    })
  }

  getTodo(id: any){
    this.todoSerive.getATodo(id).subscribe((res: Todo) =>{
      this.currentTodo = res;
    },error => {
      console.log(error);
    })
  }

  get title(){
    return this.reactiveForm.get('title');
  }
  
  dateToString(newDate: Deadline) {
    let year = newDate.year;
    let month = newDate.month;
    let day = newDate.day;

    this.reactiveForm.value.deadline = year+ '-'+ month + '-' + day;
    return this.reactiveForm.value.deadline;
  }

  updateTodo(data: Todo){
    this.todoSerive.updateTodo(this.currentTodo!.id, data).subscribe(()=>{
      this.message = 'Todo Updated';
      this.router.navigate([`/reactive`]);
    }, (error: any) =>{
      console.log(error);
    })
  }

  submitHandler(){
    this.updateTodo(this.reactiveForm.value);
  }

}
