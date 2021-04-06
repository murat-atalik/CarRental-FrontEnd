import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImages';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  apiUrl = 'https://localhost:44325/api/';
  constructor(private httpClient: HttpClient) {}

  getCarImagesById(imageId: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'CarImages/getbyid?imageId=' + imageId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
