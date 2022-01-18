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

    sessionStorage.setItem("cart", JSON.stringify(this.cart));
  }

  removeVehicle(vehicle: Vehicle) {
    this.cart.vehicles = this.cart.vehicles.filter(e=> e.id !== vehicle.id);
    this.cart.amount -= vehicle.price;
    console.log(this.cart);
    sessionStorage.setItem("cart", JSON.stringify(this.cart));
  }

  InCart(vehicle?: Vehicle) {
    return this.cart.vehicles.some(item => item.id === vehicle?.id);
  }
}

interface Cart {
  vehicles: Vehicle[];
  amount: number;
}
