import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { Part } from 'src/app/models/part.model';
import {Router} from "@angular/router";
import { PartService } from '../part.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-part',
  templateUrl: './add-part.component.html',
  styleUrls: ['./add-part.component.scss']
})
export class AddPartComponent implements OnInit {

  constructor(private router: Router, private _partService: PartService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getCategories();

  }

  addForm = this.fb.group({
    name: [''],
    description: [''],
    eanNumber: [''],
    price: [''],
    categoryID: [''],
   
  })

  categories?: Array<Category> = []
  getCategories()
  {
    return this._partService.getCategories().subscribe(
      result =>{
        this.categories = result;
        console.log(this.categories)
      }
    );

  }

 
  submitted: boolean = false;
  onSubmit()
  {
    this.submitted = true;
    this._partService.postPart(this.addForm.value).subscribe();
    this.router.navigate(["/parts/overview"]);
    //api call
  }

}
