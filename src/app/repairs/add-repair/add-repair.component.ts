import { Component, OnInit } from '@angular/core';
import { Repair } from 'src/app/models/repair.model';
import { FormBuilder } from '@angular/forms';
import {Router} from "@angular/router";
import { DatePipe } from '@angular/common';
import { EmployeeService } from 'src/app/employees/employee.service';
import { Employee } from 'src/app/models/employee.model';
import { ActivatedRoute } from '@angular/router';
import { RepairService } from '../repair.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-add-repair',
  templateUrl: './add-repair.component.html',
  styleUrls: ['./add-repair.component.scss']
})
export class AddRepairComponent implements OnInit {

  constructor(
    private router: Router, 
    private fb: FormBuilder, 
    private datePipe: DatePipe, 
    private _employeeService: EmployeeService, 
    private route: ActivatedRoute,
    private _repairService: RepairService,
    private location: Location
    
  ) 
  { 

  }

  addForm = this.fb.group({
    customerID: [''],
    employeeID: [''],
    type: [''],
    price: [parseInt('')],
    date: [this.datePipe.transform('')],
    description: ['']
   
  })

  employees: Array<Employee> = [];
 

  uuid: string ="";
  repair: Repair = new Repair("45414","c83dd3d943f244cb588dd9236fbc59c1a","eb835876cb8b04a48896c8845d929165a","onderhoud", 241,"01/02/2021", "Groot onderhoud");
  ngOnInit(): void {
    this.getEmployees();
    this.uuid = JSON.parse(this.route.snapshot.params['uuid']);
    if(JSON.parse(this.route.snapshot.params['repair']) != null){
      this.repair = JSON.parse(this.route.snapshot.params['repair']);
    }
    console.log(this.uuid)
  }

  getEmployees()
  {
    return this._employeeService.getEmployees().subscribe(
      result =>{
        this.employees = result;
        console.log(this.employees)
      }
    );
  }


  submitted: boolean = false;
  onSubmit()
  {
    this.submitted = true;
    this._repairService.addRepair(this.addForm.value).subscribe();
    this.location.back();
    
  }

}
