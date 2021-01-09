import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import {SharedModule} from '../shared/shared.module';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerRepairComponent } from './customer-repair/customer-repair.component';



@NgModule({
  declarations: [CustomersComponent, AddCustomerComponent, CustomerDetailComponent,  CustomerRepairComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CustomersModule { }
