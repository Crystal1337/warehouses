import { Injectable } from '@angular/core';
import { Vehicle } from '../models/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cart: Cart = {vehicles : [], amount : 0};
  private amount: number = 0;
  constructor() { }

  getCart() {
    if(JSON.parse(sessionStorage.getItem("cart")!) != null)
    {
      return this.cart = JSON.parse(sessionStorage.getItem("cart")!)
    }else{
      return this.cart;
    }
    
  }

  addVehicle(vehicle: Vehicle) {
    this.cart.vehicles.push(vehicle);
    this.cart.amount += vehicle.price;
    sessionStorage.removeItem("cart");
    sessionStorage.setItem("cart", JSON.stringify(this.cart));
  }
}

interface Cart {
  vehicles: Vehicle[];
  amount: number;
}
