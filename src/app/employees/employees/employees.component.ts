import { Component, OnInit } from '@angular/core';
import { WorkingHours } from 'src/app/models/working-hours.model';
import { DatePipe } from '@angular/common';
import { Employee } from 'src/app/models/employee.model';
import { WorkFunction } from 'src/app/models/work-function.model';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.InitData()
  }

  //generation starting hours
  //start
  startTimestamp1: Date = new Date('2020-11-01T08:30:00');
  startTimestamp2: Date = new Date('2020-11-02T08:30:00');
  startTimestamp3: Date = new Date('2020-11-03T08:30:00');
  startTimestamp4: Date = new Date('2020-11-04T08:30:00');
  startTimestamp5: Date = new Date('2020-11-05T08:30:00');
  //stop
  stopTimestamp1: Date = new Date('2020-11-01T17:00:00');
  stopTimestamp2: Date = new Date('2020-11-01T17:00:00');
  stopTimestamp3: Date = new Date('2020-11-01T17:00:00');
  stopTimestamp4: Date = new Date('2020-11-01T17:00:00');
  stopTimestamp5: Date = new Date('2020-11-01T17:00:00');
  //making workinghours objects
  workingHour1: WorkingHours = new WorkingHours(1, this.startTimestamp1, this.stopTimestamp1);
  workingHour2: WorkingHours = new WorkingHours(1, this.startTimestamp2, this.stopTimestamp2);
  workingHour3: WorkingHours = new WorkingHours(1, this.startTimestamp3, this.stopTimestamp3);
  workingHour4: WorkingHours = new WorkingHours(1, this.startTimestamp4, this.stopTimestamp4);
  workingHour5: WorkingHours = new WorkingHours(1, this.startTimestamp5, this.stopTimestamp5);
  // some lists
  workingHoursList: Array<WorkingHours> = [];
  employeesList: Array<Employee> = [];
  //Init dummie function
  function: WorkFunction = new WorkFunction(1, "employee")
  //add some dummie employees
  employee1: Employee = new Employee(1, this.workingHoursList, this.function, "Jaden", "Henderick", "0465874596", new Date('2020-11-01T08:30:00'), new Date('2021-12-01T00:00:00'), true, "E54896214");
  employee2: Employee = new Employee(2, this.workingHoursList, this.function, "Jasmien", "De smet", "0485964585", new Date('2019-04-24T00:00:00'), new Date('2022-12-23T00:00:00'), true, "E54896247");
  employee3: Employee = new Employee(3, this.workingHoursList, this.function, "Luk", "Willems", "0485479632", new Date('2015-11-01T00:00:00'), new Date('2021-12-01T00:00:00'), true, "E54896244");
  employee4: Employee = new Employee(4, this.workingHoursList, this.function, "Maarten", "Peeters", "0485693254", new Date('2020-11-01T08:30:00'), new Date('2021-12-01T00:00:00'), true, "E54896250");

  InitData(): void
  {
    this.workingHoursList.push(this.workingHour1);
    this.workingHoursList.push(this.workingHour2);
    this.workingHoursList.push(this.workingHour3);
    this.workingHoursList.push(this.workingHour4);
    this.workingHoursList.push(this.workingHour5);
    //employees
    this.employeesList.push(this.employee1);
    this.employeesList.push(this.employee2);
    this.employeesList.push(this.employee3);
    this.employeesList.push(this.employee4);
    
  }
  //table
  displayedColumns: string[] = ['firstName', 'lastName', 'workFunction', 'phoneNumber', 'startContract', 'endContract'];
  dataSource = this.employeesList;





}
