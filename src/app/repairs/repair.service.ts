import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Repair} from '../models/repair.model';

@Injectable({
  providedIn: 'root'
})
export class RepairService {

  constructor(private http: HttpClient) { }

  getRepairByCustomerIdAndDate(customerID: number, repairDate: Date): Observable<Repair>
  {
    return this.http.get<Repair>("http://localhost:32008/repairs/customer/" + customerID + "/date/" + repairDate)
  }

  getRepairsByEmployeeId(employeeID: number): Observable<Repair[]>
  {
    return this.http.get<Repair[]>("http://localhost:32008/repairs/employee/" + employeeID)
  }

  getRepairsByCustomerId(customerID: number): Observable<Repair[]>
  {
    return this.http.get<Repair[]>("http://localhost:32008/repairs/customer/" + customerID)
  }

  getRepairsByType(type: string): Observable<Repair[]>
  {
    return this.http.get<Repair[]>("http://localhost:32008/repairs/type/" + type)
  }

  getRepairsByDate(date: Date): Observable<Repair[]>
  {
    return this.http.get<Repair[]>("http://localhost:32008/repairs/date/" + date)
  }

  addRepair(repair: Repair): Observable<Repair>
  {
    return this.http.post<Repair>("http://localhost:32008/repairs" , repair)
  }

  updateRepair(repair: Repair): Observable<Repair>
  {
    return this.http.put<Repair>("http://localhost:32008/repairs" , repair)
  }

  deleteRepair(customerID: number, date: Date): Observable<Repair>
  {
    return this.http.delete<Repair>("http://localhost:32008/repairs/customer/" + customerID + "/date/" + date)
  }

}
