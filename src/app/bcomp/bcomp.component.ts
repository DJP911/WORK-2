import { Component } from '@angular/core';
import {DemoService} from '../demo.service'
@Component({
  selector: 'app-bcomp',
  templateUrl: './bcomp.component.html',
  styleUrls: ['./bcomp.component.css']
})
export class BcompComponent {
  message!:string;
  constructor(private demoservice:DemoService){
    this.demoservice.getMessage.subscribe(message=>this.message=message);
    console.log(this.message,"Message Received by the b comp");
  }
}
