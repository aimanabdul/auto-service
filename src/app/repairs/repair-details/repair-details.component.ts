import { Component, OnInit } from '@angular/core';
import {Repair} from '../../models/repair.model';

@Component({
  selector: 'app-repair-details',
  templateUrl: './repair-details.component.html',
  styleUrls: ['./repair-details.component.scss']
})
export class RepairDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // repair1: Repair = new Repair(1, 21, 5, "Olie verversen", 90, new Date("2020-12-23T00:00:00"), "olie en oliefilter", [2, 5])

}
