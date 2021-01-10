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
    return this.http.get<Repair>("http://localhost:30622/repairs/customer/" + customerID + "/date/" + repairDate)
  }

  getRepairsByEmployeeId(employeeID: number): Observable<Repair[]>
  {
    return this.http.get<Repair[]>("http://localhost:30622/repairs/employee/" + employeeID)
  }

  getRepairsByCustomerId(customerID: string): Observable<Repair[]>
  {
    return this.http.get<Repair[]>("http://localhost:30622/repairs/customer/" + customerID)
  }

  getRepairsByType(type: string): Observable<Repair[]>
  {
    return this.http.get<Repair[]>("http://localhost:30622/repairs/type/" + type)
  }

  getRepairsByDate(date: string): Observable<Repair[]>
  {
    return this.http.get<Repair[]>("http://localhost:30946/repairs/date/" + date)
  }

  addRepair(repair: Repair): Observable<Repair>
  {
    return this.http.post<Repair>("http://localhost:30946/repairs" , repair)
  }

  updateRepair(repair: Repair): Observable<Repair>
  {
    return this.http.put<Repair>("http://localhost:30946/repairs" , repair)
  }

  deleteRepair(customerID: string, date: string): Observable<Repair>
  {
    return this.http.delete<Repair>("http://localhost:30946/repairs/customer/" + customerID + "/date/" + date)
  }

}
