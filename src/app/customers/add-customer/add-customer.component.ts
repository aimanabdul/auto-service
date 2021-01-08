import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  model?: Customer;
  submitted: boolean = false;
  onSubmit(f: NgForm)
  {
    this.submitted = true;
    // add date to model object
    //this.repairModel.data = f.value.date;
    //api call
  }
}
