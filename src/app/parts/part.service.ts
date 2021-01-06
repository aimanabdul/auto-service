import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Part} from '../models/part.model';
@Injectable({
  providedIn: 'root'
})
export class PartService {

  constructor(private http: HttpClient) { }



  
  getParts(): Observable<Part[]>
  {
    
    return this.http.get<Part[]>("http://localhost:31934/parts/view");
  }

  
}
