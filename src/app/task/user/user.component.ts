import { Component  ,ViewChild, ViewContainerRef } from '@angular/core';
import { LazyLoadEvent, PrimeNGConfig, SortEvent } from 'primeng/api';
import {UserserviceService} from '../../userservice.service';
import { Displaydata } from 'src/app/displaydata.model';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent   {
  displaydataModel :  Displaydata [] = []; 
  totalRecords = 0;
  constructor(private userserviceService:UserserviceService,private crudService:CrudService,private router:Router) {}

  loadData(event: LazyLoadEvent):void {
    console.log(event);
    const skip = (event.first ?? 0) + (event.rows ?? 10);
    const take = event.rows ?? 10;
    //const "sort": [{"dir":"asc","field":"chargeBox"}]
    const field = event.sortField;
    const dir = event.sortOrder === 1 ? 'asc' : 'desc';
    const payload={skip,take,field,dir}

    // console.log(event.rows);

    this.userserviceService.getdata(payload).subscribe(
      (response) => 
      { 
        this.displaydataModel = response.data;
        this.totalRecords = response.totalRecords;

        // console.log(this.displaydataModel);

    });
  }

  adddata() {
    // this.userserviceService.instantiateModule(import('../user/form/form.module').then(m=>m.FormModule),this.containerRef)
    this.router.navigate(['/task/user/add']);
  }
  
}