import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/complex-types/carDetailDto';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

import { BrandComponent } from '../../brand/brand.component';

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
  filterText: string;

  brandFilter: string;

  colorFilter: string;

  imageUrl = environment.staticFilesUrl;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService
  ) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.carService.getCarsDetail().subscribe((response) => {
      this.carsDetail = response.data;
      this.dataLoaded = true;
    });
  }

  setBrand(brand: string) {
    this.brandFilter = brand;
  }
  setColor(color: string) {
    this.colorFilter = color;
  }
}
