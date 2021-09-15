import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';

const routes: Routes = [
  {path: '',component: ListTodoComponent, children:[
    {path: 'add', component: AddTodoComponent },
    {path: 'update/:id', component: UpdateTodoComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrivenFormRoutingModule { }
