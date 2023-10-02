import { Observable } from "rxjs";

export function functionObs(){
    console.log("function call");
      return   '1';
}

export const funObservable = new Observable(observer =>{
    console.log("observer call");
    observer.next("1");
})