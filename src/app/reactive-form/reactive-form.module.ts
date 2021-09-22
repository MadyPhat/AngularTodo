import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { ReactiveAddTodoComponent } from './reactive-add-todo/reactive-add-todo.component';
import { ReactiveListTodoComponent } from './reactive-list-todo/reactive-list-todo.component';
import { ReactiveDashboardComponent } from './reactive-dashboard/reactive-dashboard.component';
import { ReactiveUpdateTodoComponent } from './reactive-update-todo/reactive-update-todo.component';
import { ListTodoModule } from '../list-todo/list-todo.module';


@NgModule({
  declarations: [
    ReactiveAddTodoComponent,
    ReactiveListTodoComponent,
    ReactiveDashboardComponent,
    ReactiveUpdateTodoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    ListTodoModule
  ]
})
export class ReactiveFormModule { }
