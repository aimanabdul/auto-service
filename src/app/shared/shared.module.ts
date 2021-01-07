import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatIconModule } from  '@angular/material/icon';
import {MatSidenavModule } from  '@angular/material/sidenav';
import { MatListModule } from  '@angular/material/list';
import { MatButtonModule } from  '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu'
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import { PartsComponent } from '../parts/parts/parts.component';
import { AvatarModule } from 'ngx-avatar';
import {MatSelectModule} from '@angular/material/select';
import {CustomersComponent} from '../customers/customers/customers.component';
import {EmployeesComponent} from '../employees/employees/employees.component';
import {RepairsComponent} from '../repairs/repairs/repairs.component';
import {AddRepairComponent} from '../repairs/add-repair/add-repair.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {AddPartComponent} from '../parts/add-part/add-part.component';




@NgModule({
  declarations: [PartsComponent, CustomersComponent, EmployeesComponent, RepairsComponent, AddRepairComponent, AddPartComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDividerModule,
    AvatarModule,
    MatSelectModule,
    MatDatepickerModule
    
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDividerModule,
    AvatarModule,
    MatSelectModule,
    MatDatepickerModule
    
    
    

  ]
})
export class SharedModule { }
