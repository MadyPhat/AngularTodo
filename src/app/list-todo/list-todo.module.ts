import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTodoComponent } from './view-todo/view-todo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewTodoComponent
  ],
  imports: [
  
  CommonModule,
    FormsModule
  ],
  exports: [
    ViewTodoComponent
  ]
})
export class ListTodoModule { }
