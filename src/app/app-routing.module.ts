import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PartsComponent} from './parts/parts/parts.component';
import {RepairsComponent} from './repairs/repairs/repairs.component';
import {CustomersComponent} from './customers/customers/customers.component';
import {EmployeesComponent} from './employees/employees/employees.component';
import {RepairDetailsComponent} from './repairs/repair-details/repair-details.component';
import {AddRepairComponent} from './repairs/add-repair/add-repair.component';
import {AddPartComponent} from './parts/add-part/add-part.component';



const routes: Routes = [
  { path: 'parts', 
  children:[
    { path: 'overview', component: PartsComponent},
    { path: 'add', component: AddPartComponent},
  ]
  },
  { path: 'repairs',
  children: [
    { path: 'overview', component: RepairsComponent},
    { path: 'repair', component: RepairDetailsComponent},
    { path: 'add', component: AddRepairComponent}
  ]
  },
  { path: 'customers', component: CustomersComponent },
  { path: 'employees', component: EmployeesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
