import { Component, OnInit } from '@angular/core';
import { ReactiveFormTodoService } from './../service/reactivea-form-todo.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-add-todo',
  templateUrl: './reactive-add-todo.component.html',
  styleUrls: ['./reactive-add-todo.component.css']
})
export class ReactiveAddTodoComponent implements OnInit {


  submitted = false;
  todo: any = [];
  reactiveForm: any;

  constructor(
    private reactiveFormTodo: ReactiveFormTodoService,
    private _fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.reactiveForm = this._fb.group({
      title: [null, [Validators.required]],
      description: [null],
      deadline: [null],
      complete: [null]
    })
  }

  saveTodo(data: any) {
    this.reactiveFormTodo.addTodo(data).subscribe(res => {
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

  get title(){
    return this.reactiveForm.get('title');
  }

  submitHandler() {
    this.saveTodo(this.reactiveForm.value);
    console.log(this.reactiveForm);
  }

}
