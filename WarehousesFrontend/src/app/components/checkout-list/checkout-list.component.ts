import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout-list',
  templateUrl: './checkout-list.component.html',
  styleUrls: ['./checkout-list.component.css']
})
export class CheckoutListComponent implements OnInit {
  cart?: Cart;
  constructor(private cartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

}
