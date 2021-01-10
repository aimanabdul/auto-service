import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { Repair } from 'src/app/models/repair.model';
import { RepairService } from 'src/app/repairs/repair.service';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  id: string = "";
  uuid: string = "";
  customer: Customer = new Customer();
  repairs: Array<Repair> = [];
  //table
  displayedColumns: string[] = ['date','type', 'description',  'price', 'actions'];
  dataSource = new MatTableDataSource<Repair>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router, private route: ActivatedRoute, private _repairService: RepairService) 
  { 

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.uuid = this.route.snapshot.params['uuid'];
    this.customer = JSON.parse(this.route.snapshot.params['customer']);
    this.getRepairsByCustomerId(this.id)
    
    
  }

 getRepairsByCustomerId(customerID: string)
 {
    this._repairService.getRepairsByCustomerId(customerID).subscribe(
      result =>{
        this.repairs = result;
        this.dataSource = new MatTableDataSource(this.repairs); 
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        
      }
    );
 }

 showRepairDetail(repair: Repair)
 {
  this.router.navigate(['/customers/repair',  {repair: JSON.stringify(repair)}], {skipLocationChange: true});
 }

 navToAdd()
 {
   this.router.navigate(["/repairs/add/" , JSON.stringify(this.uuid) ], {skipLocationChange: true});
 }

  

}
