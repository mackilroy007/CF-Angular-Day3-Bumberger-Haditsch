import { Component, OnInit } from '@angular/core';

// import activated route
import { ActivatedRoute } from '@angular/router';
// import products and call apon them 
import { products } from '../products';
// import cart service
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(product) {
    //modal is imbedded in the product details component html file
    // window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}
