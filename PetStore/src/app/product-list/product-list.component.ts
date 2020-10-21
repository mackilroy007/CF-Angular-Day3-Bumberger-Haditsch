import { Component, OnInit } from '@angular/core';
// product import
import { products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  //import products form products.ts
  products = products;

  constructor() { }

  ngOnInit(): void {
  }

}
