import { Component, OnInit } from '@angular/core';
import { Repair } from 'src/app/models/repair.model';
import {Router} from "@angular/router";
import { RepairService } from '../repair.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html',
  styleUrls: ['./repairs.component.scss']
})
export class RepairsComponent implements OnInit {

  constructor(private router: Router, private _repairService: RepairService) { }

  ngOnInit(): void {
    this.repairsList.push(this.repair1)
  }
  
  repairsList: Array<Repair> = []
  repair1: Repair = new Repair(1, 21, 5, "Olie verversen", 90, new Date("2020-12-23T00:00:00"), "olie en oliefilter", [2, 5])
  //add to list
  
  
  displayedColumns: string[] = ['date', 'customerId', 'type', 'price', 'action'];
  dataSource = this.repairsList;

  navToDetails(): void
  {
    this.router.navigate(["/repairs/repair"]);
   
  }

  navToAdd()
  {
    this.router.navigate(["/repairs/add"]);
   
  }

  submitted: boolean = false;
  repairModel?: Repair;
  onSubmit(f: NgForm)
  {
    
   //repairModel.date = f.value.date;
    this.submitted = true;
    //api call
  }

}
