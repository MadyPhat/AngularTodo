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
  status = ['todo', 'in progress', 'pending', 'completed', 'closed'];
  priority = ['low','normal', 'medium', 'high', 'urgent'];
  active = 'all-todo';
  todos: any = [];
  currentTodo: any;
  currentIndex = -1;
  formData: any;
  userInput: any;

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
      status: ['']
    })

    console.log(this.todos)
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

  goToUpdate(index: any) {
    this.router.navigate([`/reactive/update/${index}`]);
  }
  updateTodo(data: any) {
    this.reactiveFormTodo.updateTodo(this.currentTodo.id, data).subscribe(res => {
      console.log(res);
    })
  }

  deleteTodo(id: any) {
    this.reactiveFormTodo.deleteTodo(id).subscribe(res => {
      this.getTodos();
      this.modalService.dismissAll();
    })
  }

  openModal(targetModal: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
  }

  filterTodo(){
    console.log(this.userInput);
    if(this.userInput !== null){
      this.reactiveFormTodo.sortByPriorityTodo(this.userInput).subscribe(res =>{
        this.todos = res;
      })
    }else{
      this.resfresh();
      console.log('Nothing Selected')
    }
  }

  reset(){
    this.userInput = null;
    this.getTodos();
  }
}
