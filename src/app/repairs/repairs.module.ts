import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { RepairsComponent } from './repairs/repairs.component';
import { RepairDetailsComponent } from './repair-details/repair-details.component';
import { AddRepairComponent } from './add-repair/add-repair.component';
import { RepairByDateComponent } from './repair-by-date/repair-by-date.component';
import { UpdateRepairComponent } from './update-repair/update-repair.component';



@NgModule({
  declarations: [RepairsComponent, RepairDetailsComponent, AddRepairComponent, RepairByDateComponent, UpdateRepairComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class RepairsModule { }
