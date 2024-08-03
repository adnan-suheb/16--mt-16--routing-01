import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/shared/model/product.interface';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productArr: Iproduct[] = [];
  constructor(
    private _product: ProductService
  ) { }

  ngOnInit(): void {
    this.productArr = this._product.fetchAllProducts();

  }

}
