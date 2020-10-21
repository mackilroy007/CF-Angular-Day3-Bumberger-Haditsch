import { Component, OnInit } from '@angular/core';

// import the cart items
import { CartService } from '../cart.service';

// import form builder
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
 
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
 
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
 

}