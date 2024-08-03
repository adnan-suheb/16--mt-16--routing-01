import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userCount!: number;
  prodCount!: number;

  constructor(
    private _userService: UserService,
    private _product: ProductService
  ) { }

  ngOnInit(): void {
    this.count();
  }
  count() {
    this.prodCount = this._product.fetchAllProducts().length;
    this.userCount = this._userService.fetchAllUsers().length;
  }

}
