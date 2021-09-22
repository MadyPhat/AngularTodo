import { Component, EventEmitter,OnInit, Output} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Priority } from 'src/app/data/priority';
import { Status } from 'src/app/data/status';
import { Todo } from 'src/app/interface/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.css']
})

export class ViewTodoComponent implements OnInit {

  status: Array<string> = Status;
  priority: Array<string> = Priority;
  active = 'all-todo';
  todos: Todo[] = [];
  currentTodo: Todo | undefined;
  currentIndex = -1;
  userInput: string = 'All Todo';
  order = -this.priority

  @Output("gotoUpdate") gotoUpdate: EventEmitter<number> = new EventEmitter();

  constructor(
    private toService: TodoService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getTodos();
  }

  resfresh(): void {
    this.getTodos();
    this.currentIndex = -1;
    this.currentTodo = undefined;
  }

  setCurrentTodo(todo: Todo, index: number) {
    this.currentTodo = todo;
    this.currentIndex = index;
  }


  public toggle(element: HTMLElement) {
    element.classList.toggle('d-none');
  }

  getTodos() {
    this.toService.getAllTodos().subscribe(res => {
      this.todos = res;
    })
  }

  goToUpdate(index: number) {
    this.gotoUpdate.emit(index);
  }

  deleteTodo(id: number) {
    this.toService.deleteTodo(id).subscribe(res => {
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

  filterTodo() {
    if (this.userInput !== 'All Todo') {
      this.toService.sortByPriorityTodo(this.userInput).subscribe(res => {
        this.todos = res;
      })
    } else {
      this.resfresh();
    }
  }

  reset() {
    this.userInput = 'All Todo';
    this.getTodos();
  }
}
