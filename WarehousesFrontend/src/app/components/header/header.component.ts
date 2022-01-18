import { Component, OnInit } from '@angular/core';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/Cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed: boolean = true;
  cart: Cart = {vehicles : [], amount : 0};
  faCart = faShoppingBasket;
  
  constructor(private cartService: ShoppingCartService, private router: Router) { }

  ngOnInit(): void {
      this.cart = this.cartService.getCart();
  }

  redirectToCheckout() {
    location.href="checkout";
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}