import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { DrivenDashboardComponent } from './driven-dashboard/driven-dashboard.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';

const routes: Routes = [
  {path: '',component: DrivenDashboardComponent, children:[
    {path: '', component: ListTodoComponent},
    {path: 'view', component: ListTodoComponent},
    {path: 'add', component: AddTodoComponent },
    {path: 'update/:id', component: UpdateTodoComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrivenFormRoutingModule { }
