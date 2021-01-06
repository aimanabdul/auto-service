import { Component, OnInit } from '@angular/core';
import { Repair } from 'src/app/models/repair.model';

@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html',
  styleUrls: ['./repairs.component.scss']
})
export class RepairsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  repairsList: Array<Repair> = []

  displayedColumns: string[] = ['date', 'customerId', 'type', 'price', 'action'];
  dataSource = this.repairsList;

}
