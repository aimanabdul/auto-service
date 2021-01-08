import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import {Router} from "@angular/router";
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormBuilder } from '@angular/forms';
import { EmployeeService } from '../employee.service';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: Array<Employee> = [];
  //table
  displayedColumns: string[] = ['employee', 'workFunction', 'phoneNumber', 'startContract', 'endContract'];
  dataSource = new MatTableDataSource<Employee>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private router: Router, private _employeeService: EmployeeService)
  { 
    this.getEmpyees();

  }

  ngOnInit(): void {
   
  }

  getEmpyees(){
    this._employeeService.getEmployees().subscribe(
      result =>{
        this.employees = result;
        this.dataSource = new MatTableDataSource(this.employees); 
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.employees)
      }
    );
  }
 
  
  





}
