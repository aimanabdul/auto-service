import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartsComponent } from './parts/parts.component';
import {SharedModule} from '../shared/shared.module';




@NgModule({
  declarations: [PartsComponent],
  imports: [
    CommonModule,
    SharedModule,
    
  ]
})
export class PartsModule { }
