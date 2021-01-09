import { Component, OnInit , Input} from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import {Router} from "@angular/router";
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers: Array<Customer> = [];
  //table
  displayedColumns: string[] = ['customer', 'email', 'phoneNumber', 'licensePlate', 'actions'];
  dataSource = new MatTableDataSource<Customer>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 



  constructor(private router: Router, private _customerService: CustomerService) 
  { 
    this.getCustomers();

  }

  ngOnInit(): void {
  }

  
  getCustomers()
  {
    this._customerService.getCustomers().subscribe(
      result => {
        this.customers = result;
        this.dataSource = new MatTableDataSource(this.customers); 
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.customers)
      }
    );
  }

  navToAdd()
  {
    this.router.navigate(["/customers/add"]);
   
  }

  showCustomerDetail(id: string, customer: Customer)
  {
    this.router.navigate(['/customers/detail', id, {customer: JSON.stringify(customer)}], {skipLocationChange: true});
    
  }


}
