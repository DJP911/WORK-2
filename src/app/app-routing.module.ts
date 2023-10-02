import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginportalComponent } from './loginportal/loginportal.component'
import {FormComponent} from './task/user/form/form.component'
import {DemoComponent} from './demo/demo.component'
const routes: Routes = [
  
  {
    path: 'task', 
    loadChildren: () => import('./task/task.module').then(m => m.TaskModule)
  },
  
  { path: 'login', component: LoginportalComponent },
  { path: 'form', component: FormComponent },
  { path: 'demo', component: DemoComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  
export class AppRoutingModule {}