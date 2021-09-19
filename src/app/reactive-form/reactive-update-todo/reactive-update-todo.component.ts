import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormTodoService } from '../service/reactivea-form-todo.service';

@Component({
  selector: 'app-reactive-update-todo',
  templateUrl: './reactive-update-todo.component.html',
  styleUrls: ['./reactive-update-todo.component.css']
})
export class ReactiveUpdateTodoComponent implements OnInit {

  currentTodo: any = null;
  message = '';
  priority = ['low','normal', 'medium', 'high', 'urgent'];
  status = ['todo', 'in progress', 'pending', 'completed', 'closed']
  reactiveForm: any;

  constructor(
    private reactiveTodo : ReactiveFormTodoService,
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
    this.reactiveTodo.getATodo(id).subscribe(res =>{
      this.currentTodo = res;
    }, error=>{
      console.log(error);
    })
  }

  get title(){
    return this.reactiveForm.get('title');
  }

  updateTodo(data: any){
    this.reactiveTodo.updateTodo(this.currentTodo.id, data).subscribe(()=>{
      this.message = 'Todo Updated';
      this.router.navigate([`/reactive`]);
    }, error =>{
      console.log(error);
    })
  }

  submitHandler(){
    this.updateTodo(this.reactiveForm.value);
  }

}
