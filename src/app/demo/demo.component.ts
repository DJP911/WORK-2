import { getLocaleFirstDayOfWeek } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, from, fromEvent, ReplaySubject, Subject } from 'rxjs';
import { __values } from 'tslib';
import { functionObs, funObservable } from '../components/function';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements AfterViewInit {
  // title = 'rxjs-basics';
  
  // postarray =[
  //   {title : 'Darshan1',description:'darshan description1'},
  //   {title : 'Darshan2',description:'darshan description2'},
  //   {title : 'Darshan3',description:'darshan description3'},
  // ];
  // promise = new Promise((resolve,reject)=>{
  //   setTimeout(()=>{
  //     resolve('Resolve the Promise sending data');
  //   },3000);
  // });

  // promiseobservable$ = from(this.promise);
  // postarrayobservable$ = from(this.postarray);

  constructor(){
    // this.postarrayobservable$.subscribe({
    //   next:(data)=>console.log(data),
    //   error:(error)=> console.log(error),
    //   complete:() => console.log('complete done'),
    // });
    // this.promiseobservable$.subscribe({
    //   next:(data)=>console.log(data),
    //   error:(error)=> console.log(error),
    //   complete:() => console.log('complete done ! Promise done'),
    // });
    // console.log("before function");
    // console.log(functionObs());
    // console.log(functionObs());
    // console.log("after function");
    
    // console.log("before observable");
    // funObservable.subscribe(data=>{
    //   console.log(data);
    // })
    
    // funObservable.subscribe(data=>{
    //   console.log(data);
    // })
    // console.log("after Observable");

    const subject  = new BehaviorSubject(0);
    subject.subscribe({
    next:(v) => console.log('observer A:',{v}),
      });
    subject.next(1);
    subject.next(2);

    subject.subscribe({
      next:(v) => console.log('observer B:',{v}),
    })
    subject.next(3);

    // example of behaviour Subject
    subject.subscribe(value => console.log('A',value));
    subject.next(1);
    subject.subscribe(value => console.log('B',value));
    subject.next(2);
    console.log('Last Value',subject.getValue());
    
    //  example of Replay Subject
    const subject2 = new ReplaySubject(2);
    subject2.next('H1');
    subject2.next('H2');
    subject2.next('H3');
    
    subject2.subscribe(value=>console.log(value));
    
    subject2.next('Hello');
    subject2.next('H4');
    subject2.next('H5');
    // subject2.next('H4');
    // subject2.next('H5');
    // subject2.subscribe(value=>console.log(value));
    subject2.subscribe(value=>console.log(value));

    // example of Async Subject
    const subject3 = new AsyncSubject();
    subject3.next(0);
    subject3.subscribe(value=>console.log(value));
    subject3.next(1);
    subject3.next(2);
    subject3.complete();  
  }
  
  ngAfterViewInit(): void {
    // fromEvent(document.getElementById('click-button')!,'click').subscribe({             // convert event into observable
      
    //     next:(data)=>console.log(data),
    //     error:(error)=> console.log(error),
    //     complete:() => console.log('complete done ! Promise done'),
      
    // })                      
  }


}
