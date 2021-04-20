import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';

import { RentalAddService } from 'src/app/services/rental-add.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PaymentService } from 'src/app/services/payment.service';
import { Rental } from 'src/app/models/rental';
import { ToastrService } from 'ngx-toastr';
import { CarDetailsService } from 'src/app/services/car-details.service';
import { ResponseModel } from 'src/app/models/responseModel';
import { CreditCard } from 'src/app/models/creditCard';
import { Payment } from 'src/app/models/paymet';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  cardForm = new FormGroup({
    cardBalance: new FormControl(),
    cardNumber: new FormControl(),
    cvv: new FormControl(),
    fullName: new FormControl(),
    validDate: new FormControl(new Date()),
  });
  CartItems: CartItem[];

  totalPrice: number = 0;

  date = new Date();
  cNumber: string = '';
  cvv: number;
  fullName: string = '';



  rentSuccess: boolean;
  rentMessage: string;

 

  constructor(
    private rentalAddService: RentalAddService,
    private paymentService: PaymentService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.carList();
    this.CartItems = this.rentalAddService.list();
    console.log(this.CartItems);
  }

  carList() {
    let tempTotal: number = 0;
    this.CartItems = this.rentalAddService.list();
    this.CartItems.forEach((CartItem) => {
      let temp = CartItem.car.dailyPrice * CartItem.totalDate;
      tempTotal = tempTotal + temp;
    });
    this.totalPrice = tempTotal;
  }
  pay(cardForm: FormGroup) {
    let rent = this.rentalAddService.listRental();
    var value: number[] = [];
    var temp: Payment[] = [];
    let x = 0;

    this.CartItems.forEach((cart) => {
      let temp = cart.car.dailyPrice * cart.totalDate;
      value.push(temp);
    });
    rent.forEach((r) => {
      var pay: Payment = {
        carId: r.carId,
        customerId: r.customerId,
        rentDate: r.rentDate,
        returnDate: r.returnDate,
        cardBalance: value[x],
        cardNumber: cardForm.get('cardNumber').value,
        cvv: cardForm.get('cvv').value,
        fullName: cardForm.get('fullName').value,
        validDate: new Date(cardForm.get('validDate').value).toJSON(),
      };
      x++;
      temp.push(pay);
    });

    this.paymentService.pay(temp).subscribe((response) => {
      this.rentSuccess = response.success;
      this.rentMessage = response.message;
      if (this.rentSuccess) {
        this.toastrService.success(this.rentMessage);
      } else {
        this.toastrService.error(this.rentMessage);
      }
    });
  }

  onFormSubmit(cardForm: FormGroup): void {
    this.pay(cardForm);
  }
}
