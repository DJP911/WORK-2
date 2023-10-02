import { Component } from '@angular/core';
import { FormGroup , FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  myform !: FormGroup; 
  userId: number = 10087;
  roles:string[]=[];
  constructor(private crudService: CrudService,private router:Router) {}

  ngOnInit() {
    this.myform = new FormGroup({

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
            
      this.crudService.updateData(userData,this.userId).subscribe(response=>{
        console.log('User Updated',response);
        this.router.navigate(['/task/user']);
      })

    }
  }

}
