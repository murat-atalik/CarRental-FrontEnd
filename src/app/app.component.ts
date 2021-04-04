import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CarRental-FrontEnd';
  product1 = {
    productId: 1,
    productName: 'PowerBank',
    categoryId: 1,
    productPrice: 24.0,
    unitInstock: 3,
  };
  products = [this.product1];
}
