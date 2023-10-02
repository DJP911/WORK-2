import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {CrudService} from '../../../crud.service'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  myform !: FormGroup; 
  userId: string = 'abc';
  roles:string[]=[];
  constructor(private crudService: CrudService,private router:Router) {}

  ngOnInit() {
    this.myform = new FormGroup({
      userId:new FormControl(),
      firstName: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      Role: new FormControl(),
    });
  }
  
  onSubmit() {
    if (this.myform.valid) {
      const userData = this.myform.value;
      this.crudService.addData(userData).subscribe(response => {
        console.log('User created:', response);
        this.myform.reset();
        this.router.navigate(['/task/user']);
      });
    }
  }

  // submitdata(value:any){
  //   let body ={
  //     firstName : value.firstName,
  //     lastname :value.lastname,
  //     email :value.email,
  //     phone : value.phone
  //   }
  //   // this.crudService.updateData(body,this.userId).subscribe(Response=>{console.log(Response)})
  //   // this.crudService.addData(body).subscribe(Response=>{console.log(Response)})
  // }

}
