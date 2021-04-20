import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartItem } from '../models/cartItem';
import { ListResponseModel } from '../models/ListResponseModel';
import { Payment } from '../models/paymet';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  pay(payment: any): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'rentals/add';

    return this.httpClient.post<ResponseModel>(newPath, payment);
  }
  getall(): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + 'rentals/getall';
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
}
