import { Component, OnInit } from '@angular/core';
import { Repair } from 'src/app/models/repair.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-repair',
  templateUrl: './add-repair.component.html',
  styleUrls: ['./add-repair.component.scss']
})
export class AddRepairComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  repairModel?: Repair;
  submitted: boolean = false;
  onSubmit(f: NgForm)
  {
    this.submitted = true;
    // add date to model object
    //this.repairModel.data = f.value.date;
    //api call
  }

}
