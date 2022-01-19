import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiclesComponent } from './vehicles.component';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Observable, of } from 'rxjs';
import { Warehouse } from 'src/app/models/Warehouse';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/models/Vehicle';
import { Cart } from 'src/app/models/Cart';

describe('VehiclesComponent', () => {
    let vehicle: Vehicle = {
      "id": 19,
      "make": "Dodge",
      "model": "Ram 1500",
      "year": 2004,
      "price": 9977.65,
      "licensed": true,
      "date_Added": "2018-01-18"
    }
    let component: VehiclesComponent;
    let fixture: ComponentFixture<VehiclesComponent>;
    
    let warehouse: Warehouse[] = [{
      "id": 1,
      "name": "Warehouse A",
      "location": {
          "id": 1,
          "lat": "47.13111",
          "long": "-61.54801"
      },
      "cars": {
          "id": 1,
          "location": "West wing",
          "vehicles": [
              {
                  "id": 1,
                  "make": "Volkswagen",
                  "model": "Jetta III",
                  "year": 1995,
                  "price": 12947.52,
                  "licensed": true,
                  "date_Added": "2018-09-18"
              },
              {
                  "id": 2,
                  "make": "Chevrolet",
                  "model": "Corvette",
                  "year": 2004,
                  "price": 20019.64,
                  "licensed": true,
                  "date_Added": "2018-01-27"
              },
              {
                  "id": 3,
                  "make": "Ford",
                  "model": "Expedition EL",
                  "year": 2008,
                  "price": 27323.42,
                  "licensed": false,
                  "date_Added": "2018-07-03"
              },
              {
                  "id": 4,
                  "make": "Infiniti",
                  "model": "FX",
                  "year": 2010,
                  "price": 8541.62,
                  "licensed": true,
                  "date_Added": "2018-03-23"
              },
              {
                  "id": 5,
                  "make": "GMC",
                  "model": "Safari",
                  "year": 1998,
                  "price": 14772.5,
                  "licensed": false,
                  "date_Added": "2018-07-04"
              },
              {
                  "id": 6,
                  "make": "Plymouth",
                  "model": "Colt Vista",
                  "year": 1994,
                  "price": 6642.45,
                  "licensed": true,
                  "date_Added": "2018-07-11"
              },
              {
                  "id": 7,
                  "make": "Cadillac",
                  "model": "Escalade ESV",
                  "year": 2008,
                  "price": 24925.75,
                  "licensed": false,
                  "date_Added": "2018-01-29"
              },
              {
                  "id": 8,
                  "make": "Mitsubishi",
                  "model": "Pajero",
                  "year": 2002,
                  "price": 28619.45,
                  "licensed": false,
                  "date_Added": "2018-06-12"
              },
              {
                  "id": 9,
                  "make": "Infiniti",
                  "model": "Q",
                  "year": 1995,
                  "price": 6103.4,
                  "licensed": false,
                  "date_Added": "2017-11-13"
              },
              {
                  "id": 10,
                  "make": "Ford",
                  "model": "Mustang",
                  "year": 1993,
                  "price": 18992.7,
                  "licensed": false,
                  "date_Added": "2018-01-29"
              },
              {
                  "id": 11,
                  "make": "Chevrolet",
                  "model": "G-Series 1500",
                  "year": 1997,
                  "price": 23362.41,
                  "licensed": false,
                  "date_Added": "2018-07-30"
              },
              {
                  "id": 12,
                  "make": "Cadillac",
                  "model": "DeVille",
                  "year": 1993,
                  "price": 18371.53,
                  "licensed": false,
                  "date_Added": "2018-01-24"
              },
              {
                  "id": 13,
                  "make": "Acura",
                  "model": "NSX",
                  "year": 2001,
                  "price": 23175.76,
                  "licensed": false,
                  "date_Added": "2018-03-28"
              },
              {
                  "id": 14,
                  "make": "Ford",
                  "model": "Econoline E250",
                  "year": 1994,
                  "price": 26605.54,
                  "licensed": true,
                  "date_Added": "2018-05-13"
              },
              {
                  "id": 15,
                  "make": "Lexus",
                  "model": "GX",
                  "year": 2005,
                  "price": 27395.26,
                  "licensed": false,
                  "date_Added": "2017-11-12"
              },
              {
                  "id": 16,
                  "make": "Dodge",
                  "model": "Ram Van 3500",
                  "year": 1999,
                  "price": 6244.51,
                  "licensed": true,
                  "date_Added": "2018-09-28"
              },
              {
                  "id": 17,
                  "make": "Dodge",
                  "model": "Caravan",
                  "year": 1995,
                  "price": 16145.27,
                  "licensed": false,
                  "date_Added": "2017-11-25"
              },
              {
                  "id": 18,
                  "make": "Dodge",
                  "model": "Dynasty",
                  "year": 1992,
                  "price": 15103.84,
                  "licensed": true,
                  "date_Added": "2018-08-12"
              },
              {
                  "id": 19,
                  "make": "Dodge",
                  "model": "Ram 1500",
                  "year": 2004,
                  "price": 9977.65,
                  "licensed": true,
                  "date_Added": "2018-01-18"
              }
          ]
      }
  }]
    let vehicleService: VehicleService;
    let cartService: ShoppingCartService;
    let tmpCart: Cart = {vehicles: [], amount: 0};
    
    let cartServiceStub: Partial<ShoppingCartService> = {
      getCart: function(){
        return tmpCart;
      },
      addVehicle: function(vehicle: Vehicle){
        tmpCart.vehicles.push(vehicle);
        tmpCart.amount += vehicle.price;
      },
      removeVehicle: function(vehicle: Vehicle){
        tmpCart.vehicles = tmpCart.vehicles.filter(e=> e.id !== vehicle.id);
        tmpCart.amount -= vehicle.price;
        if(tmpCart.vehicles.length == 0) { tmpCart.amount = 0}
      }
    };

    let vehicleServiceStub: Partial<VehicleService> = {
      getVehicles: function() : Observable<Warehouse[]>{
        return of(warehouse);
      }
    };

    let modalServiceStub: Partial<BsModalService> = {

    }

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ VehiclesComponent ]
      })
      .compileComponents();
    });
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          {provide: ShoppingCartService, useValue: cartServiceStub},
          {provide: VehicleService, useValue: vehicleServiceStub},
          {provide: BsModalService, useValue: modalServiceStub},
          {provide: Router, useValue: {url: "checkout"}},
        ]
      })
      
      fixture = TestBed.createComponent(VehiclesComponent);
      component = fixture.componentInstance;
      vehicleService = TestBed.inject(VehicleService);
      cartService = TestBed.inject(ShoppingCartService);
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('it should all results from database after suscribing to observable', () => {
      vehicleService.getVehicles().subscribe(result => expect(result).toBe(warehouse));
    });
    
    it('it should return 1 vehicle and its amount after adding 1 vehicle to empty cart', () => {
      tmpCart = {vehicles: [], amount: 0}
      component.addToCart(vehicle);
      expect(cartService.getCart().vehicles.length).toEqual(1);
      expect(cartService.getCart().amount).toEqual(9977.65);
    });

    it('it should return 0 vehicles and 0 amount after adding 1 and later removing vehicle to empty cart', () => {
      tmpCart = {vehicles: [], amount: 0}
      component.addToCart(vehicle);
      component.removeToCart(vehicle);
      expect(cartService.getCart().vehicles.length).toEqual(0);
      expect(cartService.getCart().amount).toEqual(0);
    });
    
});
