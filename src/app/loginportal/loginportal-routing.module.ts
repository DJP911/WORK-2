import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskModule} from '../task/task.module'
import {LoginportalComponent} from './loginportal.component'


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginportalRoutingModule { }
