import { Component } from '@angular/core';
import {DemoService} from '../demo.service'
@Component({
  selector: 'app-acomp',
  templateUrl: './acomp.component.html',
  styleUrls: ['./acomp.component.css']
})

export class AcompComponent {
  message1: string = 'Hello1';
  message2: string = 'Hello2';
  book = {title:'Heheh'};
  constructor(private demoservice:DemoService){
    this.demoservice.setMessage(this.message1);
    console.log(this.message1 ," Message send by the a comp");
  }
}
