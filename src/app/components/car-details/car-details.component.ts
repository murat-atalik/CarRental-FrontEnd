import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImages';
import { CarDetailDto } from 'src/app/models/complex-types/carDetailDto';
import { CarDetailsService } from 'src/app/services/car-details.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent implements OnInit {
  carImages: CarImage[] = [];
  carDetails: CarDetailDto;
  imageUrl = environment.staticFilesUrl;
  dataLoaded = false;
  constructor(
    private carDetailsService: CarDetailsService,
    private activatedRoute: ActivatedRoute,
    private getCarImages: CarImageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getcardetailbyid(params['carId']);
        this.getImagesById(params['carId']);
      }
    });
  }
  getcardetailbyid(carId: number) {
    this.carDetailsService.getCarDetailsById(carId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getImagesById(imageId: number) {
    this.carDetailsService.getImagesById(imageId).subscribe((response) => {
      this.carImages = response.data;
    });
  }
}
