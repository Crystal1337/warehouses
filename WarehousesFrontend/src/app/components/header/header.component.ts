import { Component, OnInit } from '@angular/core';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Vehicle } from 'src/app/models/Vehicle';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Router } from '@angular/router'; 

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

  redirect() {
    location.href="checkout";
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

}

interface Cart {
  vehicles: Vehicle[];
  amount: number;
}
