import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { observer4 } from '../observer4.service';

@Component({
  selector: 'app-new-observable',
  templateUrl: './new-observable.component.html',
  styleUrls: ['./new-observable.component.css']
})
export class NewObservableComponent implements OnInit {
  constructor(){ }
  ngOnInit(): void {
    const newObservable = new Observable<number>(observer =>{
        let timer = 0 ;
       for(let i = 0 ; i<5;i++){
        setTimeout(() => {
          observer.next(i);
        }, timer + 2000);
       }
      //  observer.complete();
     });

     let observer = {
      next:(data:number) => console.log("observer 1   "+ data),
      Error:(Error:string)=>console.log(Error),
      complete:() => console.log("Complete") 
     }
     
     newObservable.subscribe(observer);
     
     newObservable.subscribe({
      next: (data: number) => console.log("Observer 2   " + data),
      error: (error: string) => console.log(error), 
      complete: () => console.log("Complete")
    });
    newObservable.subscribe((data)=>console.log('Observer 3   '+data));
    
    newObservable.subscribe(new observer4());
  }

}
