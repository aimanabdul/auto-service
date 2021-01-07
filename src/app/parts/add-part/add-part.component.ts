import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { Part } from 'src/app/models/part.model';

@Component({
  selector: 'app-add-part',
  templateUrl: './add-part.component.html',
  styleUrls: ['./add-part.component.scss']
})
export class AddPartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categoriesList?: Array<Category>[]
  //get categories
  getCategories()
  {
    //api call 

    
  }

  partModel?: Part;
  submitted: boolean = false;
  onSubmit(f: NgForm)
  {
    this.submitted = true;
    // add date to model object
    //this.repairModel.data = f.value.date;
    //api call
  }

}
