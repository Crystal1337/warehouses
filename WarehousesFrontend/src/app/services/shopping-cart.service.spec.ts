import { TestBed } from '@angular/core/testing';
import { Cart } from '../models/Cart';
import { Vehicle } from '../models/Vehicle';

import { ShoppingCartService } from './shopping-cart.service';

describe('ShoppingCartService', () => {
  let service: ShoppingCartService;
  let cart: Cart;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have 2 more vehicles and sum of all prices as amount', () => { 
    sessionStorage.clear();
    cart = service.getCart() 

    service.addVehicle({
      "id": 1,
      "make": "Volkswagen",
      "model": "Jetta III",
      "year": 1995,
      "price": 12947.52,
      "licensed": true,
      "date_Added": "2018-09-18"
  });
  service.addVehicle({
    "id": 3,
    "make": "Ford",
    "model": "Expedition EL",
    "year": 2008,
    "price": 27323.42,
    "licensed": false,
    "date_Added": "2018-07-03"
  });

  expect(cart.vehicles.length).toEqual(2);
  expect(cart.amount).toEqual(40270.94)
  })

  it('should have 2 less vehicles and sum of all prices as amount', () => { 
    sessionStorage.clear();
    cart = service.getCart() 

    service.addVehicle({
      "id": 1,
      "make": "Volkswagen",
      "model": "Jetta III",
      "year": 1995,
      "price": 12947.52,
      "licensed": true,
      "date_Added": "2018-09-18"
  });
    service.addVehicle({
    "id": 3,
    "make": "Ford",
    "model": "Expedition EL",
    "year": 2008,
    "price": 27323.42,
    "licensed": false,
    "date_Added": "2018-07-03"
  });
  
    service.removeVehicle({
      "id": 1,
      "make": "Volkswagen",
      "model": "Jetta III",
      "year": 1995,
      "price": 12947.52,
      "licensed": true,
      "date_Added": "2018-09-18"
  });
  service.removeVehicle({
    "id": 3,
    "make": "Ford",
    "model": "Expedition EL",
    "year": 2008,
    "price": 27323.42,
    "licensed": false,
    "date_Added": "2018-07-03"
  });

  expect(cart.vehicles.length).toEqual(0);
  expect(Math.abs(cart.amount)).toEqual(0)
  })

  it('should return false for vehicle thats not in array', () =>{
    sessionStorage.clear();
    cart = service.getCart();

    service.addVehicle({
      "id": 7,
      "make": "Cadillac",
      "model": "Escalade ESV",
      "year": 2008,
      "price": 24925.75,
      "licensed": false,
      "date_Added": "2018-01-29"
    })
    let checkVehicle: Vehicle = {
      "id": 9,
      "make": "Infiniti",
      "model": "Q",
      "year": 1995,
      "price": 6103.4,
      "licensed": false,
      "date_Added": "2017-11-13"
    }
    expect(service.InCart(checkVehicle)).toEqual(false);
  })

  it('should return true for vehicle thats in array', () =>{
    sessionStorage.clear();
    cart = service.getCart();

    service.addVehicle({
      "id": 7,
      "make": "Cadillac",
      "model": "Escalade ESV",
      "year": 2008,
      "price": 24925.75,
      "licensed": false,
      "date_Added": "2018-01-29"
    })
    let checkVehicle: Vehicle = {
      "id": 7,
      "make": "Cadillac",
      "model": "Escalade ESV",
      "year": 2008,
      "price": 24925.75,
      "licensed": false,
      "date_Added": "2018-01-29"
    }
    expect(service.InCart(checkVehicle)).toEqual(true);
  })

});
