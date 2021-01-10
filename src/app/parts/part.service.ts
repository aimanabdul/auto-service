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
    
    return this.http.get<Part[]>("http://localhost:30946/parts");
  }

  
  postPart(part: Part)
  {
    return this.http.post<Part[]>("http://localhost:30946/parts", part);
  }

  getCategories()
  {
    return this.http.get<Part[]>("http://localhost:30946/parts/categories");
  }

  
}
