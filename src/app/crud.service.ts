import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserserviceService } from './userservice.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(private http: HttpClient,private userservice:UserserviceService) {}
  public url = `https://10.100.4.183:8081/api/v1/user`;
  // public url = `https://logs.evsecerebro.com:7273/api/v1/user/`;
    
  addData(data:any):Observable<any>{
      const headers = this.gettoken();
      // return this.http.post('https://logs.evsecerebro.com:7273/api/v1/role/all', data,{headers});
      return this.http.post('http://10.100.4.183:8081/api/v1/user/register', data,{headers});
    }
    
    updateData(data:any,userId:number):Observable<any>{
      // return this.http.put(this.url/{{userId}},data)
      const headers = this.gettoken();

      const updateUrl = `${this.url}/${userId}`;
      return this.http.put(updateUrl, data,{headers});
      
    } 

    // private apiUrl = 'http://10.100.4.183:8081/api/v1/role/all';
    // getRoles(data:any): Observable<any> {
    //   const headers = this.gettoken();
    //   return this.http.get(this.apiUrl,{headers});
    // }
    
    private gettoken():HttpHeaders{
    const userdata = localStorage.getItem('user');
    const userdata1 = JSON.parse((userdata) || '{}');
    const access_token = userdata1.accessToken;
    const headers = new HttpHeaders({
      Authorization: 'Bearer '+ access_token,
    });
    return headers;
    }
    
}