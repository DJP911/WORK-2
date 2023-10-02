import { NgModule } from '@angular/core';
import { ChildActivationEnd, RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import {FormComponent} from './form/form.component'
import {UpdateComponent} from '../user/update/update.component'
const routes: Routes = [
  
  {
    path: '', 
    component: UserComponent,
  },
  {
    path: 'add', 
    component: FormComponent,
  },
  {
    path: 'update', 
    component: UpdateComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
