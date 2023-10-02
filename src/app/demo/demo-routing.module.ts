import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AcompComponent} from '../acomp/acomp.component'
import {BcompComponent} from '../bcomp/bcomp.component'
const routes: Routes = [

  { path: 'a', component:AcompComponent  },
  { path: 'b', component:BcompComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
