import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ProductListComponent implements OnInit {
  products = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripción del Producto 1',
      price: 100,
    },
    {
      id: 2,
      name: 'Producto 2',
      description: 'Descripción del Producto 2',
      price: 200,
    },
    {
      id: 3,
      name: 'Producto 3',
      description: 'Descripción del Producto 3',
      price: 300,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    // this.productService
    //   .getProducts()
    //   .subscribe((data) => (this.products = data));
  }

  purchase(productId: number): void {
    console.log('Producto comprado con ID:', productId);
  }
}
