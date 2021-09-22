import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { DrivenFormRoutingModule } from './driven-form-routing.module';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DrivenDashboardComponent } from './driven-dashboard/driven-dashboard.component';
import { ListTodoModule } from '../list-todo/list-todo.module';


@NgModule({
  declarations: [
    ListTodoComponent,
    AddTodoComponent,
    UpdateTodoComponent,
    DrivenDashboardComponent
  ],
  imports: [
    CommonModule,
    DrivenFormRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    ListTodoModule
  ],
})
export class DrivenFormModule { }
