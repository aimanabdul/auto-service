import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { RepairsComponent } from './repairs/repairs.component';
import { RepairDetailsComponent } from './repair-details/repair-details.component';



@NgModule({
  declarations: [RepairsComponent, RepairDetailsComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class RepairsModule { }
