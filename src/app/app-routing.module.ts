import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarComponent } from './components/car/car.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent },
  { path: 'cars', component: CarComponent },
  { path: 'cars/brand/:brandId', component: CarComponent },

  {
    path: 'cars/color/:colorId',
    component: CarComponent,
  },
  { path: 'cars/carDetail/:carId', component: CarDetailsComponent },
  {
    path: 'cars/brand/:brandId/cars/carDetail/:carId',
    component: CarDetailsComponent,
  },
  {
    path: 'cars/color/:colorId/cars/carDetail/:carId',
    component: CarDetailsComponent,
  },
  { path: 'cars/cars/carDetail/:carId', component: CarDetailsComponent },
  { path: 'rentals', component: RentalComponent },
  { path: 'customers', component: CustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
