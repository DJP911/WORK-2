import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TaskComponent } from './task/task.component';
import { PanelModule } from 'primeng/panel';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { SidebarModule } from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import { LoginportalComponent } from './loginportal/loginportal.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './task/user/form/form.component'
import { PaginatorModule } from 'primeng/paginator';
// import { DataTableModule } from 'primeng/primeng';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { DemoComponent } from './demo/demo.component';
import { NewObservableComponent } from './components/new-observable/new-observable.component';
import { FunctionObservableComponent } from './components/function-observable/function-observable.component';
import { AcompComponent } from './acomp/acomp.component';
import { A1compComponent } from './a1comp/a1comp.component';
import { BcompComponent } from './bcomp/bcomp.component';
import { DemoRoutingModule } from './demo/demo-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateComponent } from './task/user/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TaskComponent,
    Sidebar2Component,
    LoginportalComponent,
    FormComponent,
    DemoComponent,
    NewObservableComponent,
    FunctionObservableComponent,
    AcompComponent,
    A1compComponent,
    BcompComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    SidebarModule,ButtonModule,ReactiveFormsModule,HttpClientModule,FormsModule,TableModule,
    PaginatorModule,
    DemoRoutingModule,
    BrowserAnimationsModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
