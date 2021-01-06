import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [EmployeesComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class EmployeesModule { }
