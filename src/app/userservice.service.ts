import { Injectable, Injector, Type, ViewContainerRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Displaydata, responseModelList } from './displaydata.model';
import {FormComponent} from '../app/task/user/form/form.component'

@Injectable({
  providedIn: 'root'
})

export class UserserviceService {

  constructor(private http: HttpClient,private injector: Injector) { }

  getdata(payload :any): Observable<responseModelList<Displaydata>> {
    const userdata = localStorage.getItem('user');
    const userdata1 = JSON.parse((userdata) || '{}');
    const access_token = userdata1.accessToken;
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + access_token,
    });
    return this.http.post<responseModelList<Displaydata>>('http://10.100.4.183:8081/api/v1/user/customers', payload, { headers });
  }
}
