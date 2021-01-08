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

  repairsList: Array<Repair> = [];
  //table
  displayedColumns: string[] = ['date', 'customerId', 'type', 'price', 'action'];
  dataSource = this.repairsList;

  searchForm = this.fb.group({
    date: [this.datePipe.transform('')],
   
 
  })

  constructor(private router: Router, private _repairService: RepairService, private fb: FormBuilder, private datePipe: DatePipe) { }

  ngOnInit(): void {
    
  }

  getRepairs()
  {
    
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

}
