import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDetailDtoResponseModel } from '../models/complex-types/customerDetailDtoResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = 'https://localhost:44325/api/customers/getallcustomerDetails';
  constructor(private httpClient: HttpClient) {}
  getCustomers(): Observable<CustomerDetailDtoResponseModel> {
    return this.httpClient.get<CustomerDetailDtoResponseModel>(this.apiUrl);
  }
}
