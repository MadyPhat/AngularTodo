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
    this.getTodo(this.route.snapshot.paramMap.get('id'));
  }



  getTodo(id: any){
    this.todoSerive.getATodo(id).subscribe((res: Todo) =>{
      this.currentTodo = res;
      this.setFormValue();
    },error => {
      console.log(error);
    })
  }

  setFormValue(){
    this.reactiveForm = this._fb.group({
      title: [this.currentTodo?.title, [Validators.required]],
      description: [this.currentTodo?.description],
      deadline: [this.currentTodo?.deadline],
      status: [this.currentTodo?.status],
      priority: [this.currentTodo?.priority]
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
      this.router.navigate([`/reactive`]);
    }, (error: any) =>{
      console.log(error);
    })
  }

  submitHandler(){
    this.updateTodo(this.reactiveForm.value);
  }

}
