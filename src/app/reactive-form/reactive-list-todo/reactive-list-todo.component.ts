import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormTodoService } from '../service/reactivea-form-todo.service';

@Component({
  selector: 'app-reactive-list-todo',
  templateUrl: './reactive-list-todo.component.html',
  styleUrls: ['./reactive-list-todo.component.css']
})
export class ReactiveListTodoComponent implements OnInit {

  editTodoForm!: FormGroup;
  active = 'all-todo';
  status: any;
  todos: any = [];
  currentTodo: any;
  currentIndex = -1;
  formData: any;
  
  constructor(
    private reactiveFormTodo: ReactiveFormTodoService,
    private router: Router,
    private fb: FormBuilder,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getTodos();

    this.editTodoForm = this.fb.group({
      title: [''],
      description: [''],
      deadline: [''],
      complete: ['']
    })
  }

  resfresh(): void {
    this.getTodos();
    this.currentIndex = -1;
    this.currentTodo = null;
  }

  setCurrentTodo(todo: null, index: number) {
    this.currentTodo = todo;
    this.currentIndex = index;
    console.log(this.currentTodo, this.currentIndex)
  }


  public toggle(element: HTMLElement) {
    element.classList.toggle('d-none');
  }

  getTodos() {
    this.reactiveFormTodo.getAllTodos().subscribe(res => {
      this.todos = res;
      console.log(this.todos);
    })
  }

  getCompletedTodos() {
    this.todos = null;
    this.status = true;
    this.reactiveFormTodo.getStatus(this.status).subscribe(res => {
      this.todos = res;
      console.log(this.todos);
    })
  }

  getInCompletedTodos() {
    this.todos = null;
    this.status = false;
    this.reactiveFormTodo.getStatus(this.status).subscribe(res => {
      this.todos = res;
      console.log(this.todos);
    })
  }

  updateTodo(data: any) {
    this.reactiveFormTodo.updateTodo(this.currentTodo.id, data).subscribe(res => {
      console.log(res);
    })
  }

  deleteTodo(id: any) {
    this.reactiveFormTodo.deleteTodo(id).subscribe(res => {
      this.getTodos();
      console.log(res);
    })
  }

  deleteCompleteTodo(id: any) {
    this.reactiveFormTodo.deleteTodo(id).subscribe(res => {
      this.getCompletedTodos();
      console.log(res);
    })
  }

  deleteInCompleteTodo(id: any) {
    this.reactiveFormTodo.deleteTodo(id).subscribe(res => {
      this.getInCompletedTodos();
      console.log(res);
    })
  }

  openModal(targetModal: any, todo: { title: any; description: any; deadline: any; complete: any }) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });

    this.editTodoForm.patchValue({
      title: todo.title,
      description: todo.description,
      deadline: todo.deadline,
      complete: todo.complete
    });
  }
  onSubmit() {
    this.updateTodo(this.editTodoForm.value);
    this.resfresh();
    this.modalService.dismissAll();
    // console.log("res:", this.editTodoForm.getRawValue());
    console.log(this.editTodoForm.value)
  }

  completePageModalSubmit() {
    this.updateTodo(this.editTodoForm.value);
    this.getCompletedTodos();
    this.modalService.dismissAll();
    // console.log("res:", this.editTodoForm.getRawValue());
    console.log(this.editTodoForm.value)
  }

  inCompletePageModalSubmit() {
    this.updateTodo(this.editTodoForm.value);
    this.getInCompletedTodos();
    this.modalService.dismissAll();
    // console.log("res:", this.editTodoForm.getRawValue());
    console.log(this.editTodoForm.value)
  }

}
