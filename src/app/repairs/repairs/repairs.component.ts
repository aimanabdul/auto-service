import { Component, OnInit } from '@angular/core';
import { Repair } from 'src/app/models/repair.model';
import {Router} from "@angular/router";
import { RepairService } from '../repair.service';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html',
  styleUrls: ['./repairs.component.scss']
})
export class RepairsComponent implements OnInit {

  repairs: Array<Repair> = [];
  displayedColumns: string[] = ['date', 'customerId', 'type', 'price', 'actions'];
  dataSource = new MatTableDataSource<Repair>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  currentDate: string = "10/01/2020";


  searchForm = this.fb.group({
    date: [this.datePipe.transform('')],
   
 
  })

  constructor(
    private router: Router, 
    private _repairService: RepairService, 
    private fb: FormBuilder, 
    private datePipe: DatePipe
  ) 
  { 

  }

  ngOnInit(): void {
    this.getRepairs();
  }

  getRepairs()
  {
    this._repairService.getRepairsByDate(this.currentDate).subscribe(
      result => {
        this.repairs = result;
        this.dataSource = new MatTableDataSource(this.repairs); 
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.repairs)
      }
    );
  }
  navToDetails(): void
  {
    this.router.navigate(["/repairs/repair"]);
   
  }

  navToAdd()
  {
    this.router.navigate(["/repairs/add"]);
   
  }

  submitted: boolean = false;
  repairModel?: Repair;
  onSubmit()
  {
    this.submitted = true;

  }

  deleteRepair(customerID: string, date: string)
  {
    return this._repairService.deleteRepair(customerID, date).subscribe();
  }

  navToUpdate(repair: Repair)
  {
    this.router.navigate(["/repairs/update", {repair: JSON.stringify(repair)}], {skipLocationChange: true});
  }

}
