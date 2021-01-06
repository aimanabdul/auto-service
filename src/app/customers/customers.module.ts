import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CustomersModule { }
