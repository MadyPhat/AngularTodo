import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reactive-list-todo',
  templateUrl: './reactive-list-todo.component.html',
  styleUrls: ['./reactive-list-todo.component.css']
})
export class ReactiveListTodoComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goToUpdate(index: number) {
    this.router.navigate([`/reactive/update/${index}`]);
  }
}
