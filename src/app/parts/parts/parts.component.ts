import { Component, OnInit } from '@angular/core';
import {PartService} from '../part.service';
import {Part} from '../../models/part.model';
import {Router} from "@angular/router";
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {

 parts: Array<Part> = [];
 //table
 displayedColumns: string[] = ['name', 'eannumber', 'description', 'price'];
 dataSource = new MatTableDataSource<Part>();
 @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;

 category = 'option2';

 searchForm = this.fb.group({
    category: [''],
   
 
  })

  constructor(private _partService: PartService, private router: Router, private fb: FormBuilder)
  { 
    this.getParts();
  }

  ngOnInit(): void {
    
  }

 
  getParts()
  {
    this._partService.getParts().subscribe(
      result => {
        // result.forEach(p=> {
        //   this._partService.ge
        // });
        this.parts = result;
        this.dataSource = new MatTableDataSource(this.parts); 
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        
      } 
    );
    
  }


  //find parts with given categoryID
  submitted: boolean = false;
  CategoryModel?: Part;
  onSubmit()
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
