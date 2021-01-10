import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Repair } from 'src/app/models/repair.model';
import { RepairService } from '../repair.service';

@Component({
  selector: 'app-update-repair',
  templateUrl: './update-repair.component.html',
  styleUrls: ['./update-repair.component.scss']
})
export class UpdateRepairComponent implements OnInit {

  constructor(
    private router: Router, 
    private fb: FormBuilder, 
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private _repairService: RepairService,
  ) 
  { }

  ngOnInit(): void {
    this.repair = JSON.parse(this.route.snapshot.params['repair']);
  }

  updateForm = this.fb.group({
    customerID: [''],
    employeeID: [''],
    type: [''],
    price: [parseInt('')],
    date: [this.datePipe.transform('')],
    description: ['']
   
  });

  repair: Repair = new Repair();

  submitted: boolean = false;
  onSubmit()
  {
    this.submitted = true;
    this._repairService.updateRepair(this.updateForm.value).subscribe();

  }

  

}
