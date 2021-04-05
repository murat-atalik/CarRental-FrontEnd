import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/complex-types/carDetailDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  dataLoaded = false;
  carsdetail: CarDetailDto[] = [];
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
      this.carsdetail = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsDetailByBrand(brandId: number) {
    this.carService.getCarsBrand(brandId).subscribe((response) => {
      this.carsdetail = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsDetailByColor(colorId: number) {
    this.carService.getCarsColor(colorId).subscribe((response) => {
      this.carsdetail = response.data;
      this.dataLoaded = true;
    });
  }
}
