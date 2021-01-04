import { Component, OnInit } from '@angular/core';
import {PartService} from '../part.service';
import {Part} from '../../models/part.model';


@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {

  parts?: Part[];
  constructor(private _partService: PartService)
  { 
    this._partService.getParts().subscribe(result => {this.parts = result});
    console.log(this.parts)
  }

  ngOnInit(): void {
  }

 partName: String="Real Remschijf";

}
