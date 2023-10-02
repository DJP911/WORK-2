import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public url = 'http://10.100.4.183:8081/api/v1/auth/web/login';

  constructor(private http : HttpClient) { }

  login(email:string,password:string){
    const param ={email,password};
    return this.http.post(this.url,param);
  }
}

