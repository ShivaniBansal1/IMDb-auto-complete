import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {AutoCompleteComponent} from './auto-complete/auto-complete.component'

const routes: Routes = [
  // {path:"", redirectTo:"autoComplete", pathMatch:"full"},
  // {path:"autoComplete", component:AutoCompleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
