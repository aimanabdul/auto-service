import { Component, OnInit } from '@angular/core';
import {PartService} from '../part.service';
import {Part} from '../../models/part.model';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";


@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {

  parts?: Part[];
  constructor(private _partService: PartService, private router: Router)
  { 
    this._partService.getParts().subscribe(result => {this.parts = result});
    console.log(this.parts)
  }

  ngOnInit(): void {
  }

 partName: String="Real Remschijf";
 selected = 'option2';
 partsList: Array<Part> = [];

 //get categories voor searchForm
 getCategories()
 {

 }

 //table
 displayedColumns: string[] = ['name', 'description', 'eanNumber', 'price', 'category'];
 dataSource = this.partsList;

  submitted: boolean = false;
  CategoryModel?: Part;

  //find parts with given categoryID
  onSubmit(f: NgForm)
  {
    
    //partModel.date = f.value.date;
    this.submitted = true;
    //api call
  }

  navToAdd()
  {
    this.router.navigate(["/parts/add"]);
   
  }



}
