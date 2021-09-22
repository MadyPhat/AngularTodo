import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import(`./driven-form/driven-form.module`).then(m => m.DrivenFormModule)},
  { path: 'driven', loadChildren: () => import(`./driven-form/driven-form.module`).then(m => m.DrivenFormModule) },
  { path: 'reactive', loadChildren: () => import(`./reactive-form/reactive-form.module`).then(m => m.ReactiveFormModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  
exports: [RouterModule]
})
export class AppRoutingModule { }
