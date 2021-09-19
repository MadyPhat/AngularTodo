import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveAddTodoComponent } from './reactive-add-todo/reactive-add-todo.component';
import { ReactiveDashboardComponent } from './reactive-dashboard/reactive-dashboard.component';
import { ReactiveListTodoComponent } from './reactive-list-todo/reactive-list-todo.component';
import { ReactiveUpdateTodoComponent } from './reactive-update-todo/reactive-update-todo.component';

const routes: Routes = [
  {path: '', component: ReactiveDashboardComponent, children:[
    {path:'', component: ReactiveListTodoComponent},
    {path: 'view', component: ReactiveListTodoComponent},
    {path: 'add', component: ReactiveAddTodoComponent},
    {path: 'update/:id', component: ReactiveUpdateTodoComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ReactiveFormRoutingModule { }
