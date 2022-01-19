import { DebugElement, ViewEncapsulation } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Vehicle } from 'src/app/models/Vehicle';
import { VehicleDetailed } from 'src/app/models/VehicleDetailed';
import { Warehouse } from 'src/app/models/Warehouse';

import { VehiclesItemComponent } from './vehicles-item.component';

describe('VehiclesItemComponent', () => {
  let component: VehiclesItemComponent;
  let fixture: ComponentFixture<VehiclesItemComponent>;

  let vehicle: Vehicle = {
    "id": 1,
    "make": "Volkswagen",
    "model": "Jetta III",
    "year": 1995,
    "price": 12947.52,
    "licensed": true,
    "date_Added": "2018-09-18"
  };
  let warehouse: Warehouse = {
    "id": 1,
    "name": "Warehouse A",
    "location": {
      "lat": "47.13111",
      "long": "-61.54801"
    },
    "cars": {
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
  };
  let vehicleDetailed: VehicleDetailed = {vehicle: vehicle, warehouse: warehouse};
  let tmpDetailed: VehicleDetailed;
  let tmpVehicle: Vehicle;
  let viewElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesItemComponent);
    component = fixture.componentInstance;
    component.vehicle = vehicle;
    component.warehouse = warehouse;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should emit the same vehicleDetailed object for onClickVehicle event emitter', () => {
    viewElement = fixture.debugElement.query(By.css('.details-button'));
    component.onClickVehicle.subscribe(value => tmpDetailed = value);
    viewElement.triggerEventHandler('click', null);
    expect(vehicleDetailed).toEqual(tmpDetailed);
  });

  it('should emit the same vehicle for onClickAddToCart event emitter', () => {
    viewElement = fixture.debugElement.query(By.css('.button-add-to-cart'));
    component.onClickAddToCart.subscribe(value => tmpVehicle = value);
    viewElement.triggerEventHandler('click', null);
    expect(tmpVehicle).toEqual(vehicle);
  });

  it('should emit the same vehicle for onClickRemoveToCart event emitter', () => {
    component.inCart = true;
    fixture.detectChanges();
    viewElement = fixture.debugElement.query(By.css('.button-remove-to-cart'));
    component.onClickRemoveToCart.subscribe(value => tmpVehicle = value);
    viewElement.triggerEventHandler('click', null);
    expect(tmpVehicle).toEqual(vehicle);
  });

});
