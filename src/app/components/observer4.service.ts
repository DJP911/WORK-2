import { Injectable } from '@angular/core';
import { Observer } from 'rxjs';

@Injectable({providedIn: 'root'})
export class observer4 implements Observer<number> {
    constructor() { }
    
    next(data:number){
        console.log("observer 4     "+data);
    }
    error(error:string){
        console.log(error);
    }
    complete(){
        console.log("complete done by class");
    }
}