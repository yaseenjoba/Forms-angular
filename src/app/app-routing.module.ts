import { ReactiveComponent } from './reactive/reactive.component';
import { Form1Component } from './form1/form1.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{path:"form1",component:Form1Component},{path:"form2",component:ReactiveComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
