import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { ReactiveAddTodoComponent } from './reactive-add-todo/reactive-add-todo.component';
import { ReactiveListTodoComponent } from './reactive-list-todo/reactive-list-todo.component';


@NgModule({
  declarations: [
    ReactiveAddTodoComponent,
    ReactiveListTodoComponent
  ],
  imports: [
  
CommonModule,
    ReactiveFormRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    
  ]
})
export class ReactiveFormModule { }
