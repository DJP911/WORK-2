import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormComponent} from './form.component'
import {UserComponent} from '../user.component'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: FormComponent },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class FormRoutingModule { }
