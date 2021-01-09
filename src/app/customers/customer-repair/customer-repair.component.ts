import { Component, OnInit } from '@angular/core';
import { Repair } from 'src/app/models/repair.model';
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-repair',
  templateUrl: './customer-repair.component.html',
  styleUrls: ['./customer-repair.component.scss']
})
export class CustomerRepairComponent implements OnInit {


  repair: Repair = new Repair()


  constructor(private router: Router, private route: ActivatedRoute) 
  { 

  }

  ngOnInit(): void 
  {
    this.repair = JSON.parse(this.route.snapshot.params['repair']);
    console.log(this.repair)
  }

}
