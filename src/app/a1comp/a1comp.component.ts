import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-a1comp',
  templateUrl: './a1comp.component.html',
  styleUrls: ['./a1comp.component.css']
})
export class A1compComponent {
  @Input() message1 : string  = '';
  @Input() expectedprop !: {title:string};
  constructor(){
  }
}