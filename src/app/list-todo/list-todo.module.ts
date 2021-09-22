import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTodoComponent } from './view-todo/view-todo.component';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    ViewTodoComponent
  ],
  imports: [
  CommonModule,
  FormsModule,
  OrderModule
  ],
  exports: [
    ViewTodoComponent
  ]
})
export class ListTodoModule { }
