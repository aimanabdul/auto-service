import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {Customer} from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]>
  {
    return this.http.get<Customer[]>("http://localhost:30946/customers")
  }

  getCustomerByLicensePlate(licensePlate: string): Observable<Customer>
  {
    return this.http.get<Customer>("http://localhost:30946/customer/licenseplate/" + licensePlate)
  }

  getCustomerByPhoneNumber(phoneNumber: string): Observable<Customer>
  {
    return this.http.get<Customer>("http://localhost:30946/customer/phonenumber/" + phoneNumber)
  }


  getCustomerByEmail(email: string): Observable<Customer>
  {
    return this.http.get<Customer>("http://localhost:30946/customer/email/" + email)
  }

  getCustomerByUuid(uuid: string): Observable<Customer>
  {
    return this.http.get<Customer>("http://localhost:30946/customer/uuid/" + uuid)
  }





}
