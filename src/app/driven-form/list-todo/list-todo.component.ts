import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DrivenFormTodoService } from '../service/driven-form-todo.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  active = 'all-todo';
  todos: any = [];
  currentTodo: any;
  currentIndex = -1;
  userInput!: null;
  status = ['todo', 'in progress', 'pending', 'completed', 'closed'];
  priority = ['low','normal', 'medium', 'high', 'urgent'];

  constructor(
    private drivenFormTodo: DrivenFormTodoService,
    private router: Router,
    private fb: FormBuilder,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getTodos();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getTodos();
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
    this.drivenFormTodo.getAllTodos().subscribe(res => {
      this.todos = res;
      console.log(this.todos);
    })
  }

  goToUpdate(index: any){
    this.router.navigate([`/driven/update/${index}`]);
  }

  deleteTodo(id: any) {
    this.drivenFormTodo.deleteTodo(id).subscribe(res => {
      this.getTodos();
      this.modalService.dismissAll();
      console.log(res);
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
      this.drivenFormTodo.sortByPriorityTodo(this.userInput).subscribe(res =>{
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
