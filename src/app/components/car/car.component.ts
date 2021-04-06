import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/complex-types/carDetailDto';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  dataLoaded = false;
  carLoaded = false;
  carsDetail: CarDetailDto[] = [];
  currentCar: CarDetailDto;

  imageUrl = environment.staticFilesUrl;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['colorId']) {
        this.getCarsDetailByColor(params['colorId']);
      } else if (params['brandId']) {
        this.getCarsDetailByBrand(params['brandId']);
      } else {
        this.getCars();
      }
    });
  }

  getCars() {
    this.carService.getCarsDetail().subscribe((response) => {
      this.carsDetail = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsDetailByBrand(brandId: number) {
    this.carService.getCarsBrand(brandId).subscribe((response) => {
      this.carsDetail = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsDetailByColor(colorId: number) {
    this.carService.getCarsColor(colorId).subscribe((response) => {
      this.carsDetail = response.data;
      this.dataLoaded = true;
    });
  }
  // getCarDetail(carId: number) {
  //   this.carService.getCarDetail(carId).subscribe((response) => {
  //     this.carsDetail = response.data;
  //     this.dataLoaded = true;
  //     console.log(carId);
  //   });
  // }
  setCurrentCar(car: CarDetailDto) {
    this.currentCar = car;
    this.carLoaded = true;
  }
  getCurrentButtonClass() {
    return '"btn btn-primary"';
  }
}
