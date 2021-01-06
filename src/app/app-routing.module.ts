import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PartsComponent} from './parts/parts/parts.component';
import {RepairsComponent} from './repairs/repairs/repairs.component';
import {CustomersComponent} from './customers/customers/customers.component';
import {EmployeesComponent} from './employees/employees/employees.component';

const routes: Routes = [
  { path: 'parts', component: PartsComponent },
  { path: 'repairs', component: RepairsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'employees', component: EmployeesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
