import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import {SharedModule} from '../shared/shared.module';
import { AddCustomerComponent } from './add-customer/add-customer.component';



@NgModule({
  declarations: [CustomersComponent, AddCustomerComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CustomersModule { }
