import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {


  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

  }
  goToUpdate(index: any){
    this.router.navigate([`/driven/update/${index}`]);
  }
}
