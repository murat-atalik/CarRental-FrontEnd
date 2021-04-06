import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImages';
import { CarDetailDto } from '../models/complex-types/carDetailDto';
import { ListResponseModel } from '../models/ListResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarDetailsService {
  apiUrl = 'https://localhost:44325/api/';

  constructor(private httpClient: HttpClient) {}

  // getCarDetails(carId: number): Observable<SingleResponseModel<CarDetailDto>> {
  //   let newPath = this.apiUrl + 'getbyid?id=' + carId;
  //   return this.httpClient.get<SingleResponseModel<CarDetailDto>>(newPath);
  // }

  getImagesById(carId: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'carimages/getallcarimages?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getCarDetails(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'cars/getdetail';
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarDetailsById(
    carId: number
  ): Observable<SingleResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'cars/getbyid?carId=' + carId;
    return this.httpClient.get<SingleResponseModel<CarDetailDto>>(newPath);
  }
}
