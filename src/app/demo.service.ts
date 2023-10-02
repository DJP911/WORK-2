import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DemoService {
  public message = new BehaviorSubject('');
  getMessage = this.message.asObservable();
  constructor() {}
  setMessage(message:string){
    this.message.next(message);
  }
}

