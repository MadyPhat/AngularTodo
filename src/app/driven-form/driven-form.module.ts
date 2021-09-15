import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { DrivenFormRoutingModule } from './driven-form-routing.module';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListTodoComponent,
    AddTodoComponent,
    UpdateTodoComponent
  ],
  imports: [
    CommonModule,
    DrivenFormRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDatepickerModule
  ],
})
export class DrivenFormModule { }
