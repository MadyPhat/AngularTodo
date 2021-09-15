import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveAddTodoComponent } from './reactive-add-todo/reactive-add-todo.component';
import { ReactiveListTodoComponent } from './reactive-list-todo/reactive-list-todo.component';

const routes: Routes = [
  {path: '', component: ReactiveListTodoComponent, children:[
    {path: 'add', component: ReactiveAddTodoComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ReactiveFormRoutingModule { }
