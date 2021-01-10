import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PartsComponent} from './parts/parts/parts.component';
import {RepairsComponent} from './repairs/repairs/repairs.component';
import {CustomersComponent} from './customers/customers/customers.component';
import {EmployeesComponent} from './employees/employees/employees.component';
import {RepairDetailsComponent} from './repairs/repair-details/repair-details.component';
import {AddRepairComponent} from './repairs/add-repair/add-repair.component';
import {AddPartComponent} from './parts/add-part/add-part.component';
import {AddCustomerComponent} from './customers/add-customer/add-customer.component';
import {CustomerDetailComponent} from './customers/customer-detail/customer-detail.component';
import {CustomerRepairComponent} from './customers/customer-repair/customer-repair.component';
import {UpdateRepairComponent} from './repairs/update-repair/update-repair.component';



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
      { path: 'add/:uuid', component: AddRepairComponent},
      { path: 'update', component: UpdateRepairComponent},
    ]
  },
  { path: 'customers', 
    children: [
      { path: 'overview', component: CustomersComponent},
      { path: 'add', component: AddCustomerComponent},
      { path: 'detail/:id/:uuid', component: CustomerDetailComponent},
      { path: 'repair', component: CustomerRepairComponent},
    ]
  },
  { path: 'employees', 
    children: [
      { path: 'overview', component: EmployeesComponent},
    ]
  },
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
