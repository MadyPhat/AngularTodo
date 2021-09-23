import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTodoComponent } from './view-todo/view-todo.component';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { NgbAlertModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ViewTodoComponent
  ],
  imports: [
  CommonModule,
  FormsModule,
  OrderModule,
  NgbAlertModule,
  NgbToastModule
  ],
  exports: [
    ViewTodoComponent
  ]
})
export class ListTodoModule { }
