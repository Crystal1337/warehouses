import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { Vehicle } from 'src/app/models/Vehicle';
import { environment } from 'src/environments/environment';
import { filter } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Warehouse } from 'src/app/models/Warehouse';
import { Cars } from 'src/app/models/Cars';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { VehicleDetailed } from 'src/app/models/VehicleDetailed';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})



export class VehiclesComponent implements OnInit {
  modalRef?: BsModalRef;
  detailed: VehicleDetailed[] = [];
  cart: Vehicle[] = [];

  constructor(private vehicleService: VehicleService, private modalService: BsModalService, private cartService: ShoppingCartService, private router: Router) { 
    
  }

  ngOnInit(): void {
      this.vehicleService.getVehicles().subscribe(result => {
        result.forEach(warehouse => {
          warehouse.cars.vehicles.forEach(vehicle => { 
            this.detailed.push({vehicle, warehouse});   
          });
        });
        this.detailed.sort((a:VehicleDetailed, b:VehicleDetailed) => ((new Date(a.vehicle.date_Added).getTime() - new Date(b.vehicle.date_Added).getTime())));
      });
      
      
  }

  openModal(template: TemplateRef<any>, vehicle: Vehicle, warehouse: Warehouse) {  
    this.modalRef = this.modalService.show(ModalContentComponent);
    this.modalRef.content.closeBtnName = 'Close';
    this.modalRef.content.vehicle = vehicle;
    this.modalRef.content.warehouse = warehouse;
  }

  addToCart(vehicle: Vehicle) {
    this.cartService.addVehicle(vehicle);
  }
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'modal-content',
  template: `
    <div class="modal-body">
    <button type="button" class="btn-close close pull-right" aria-label="Close" (click)="bsModalRef.hide()"><span aria-hidden="true" class="visually-hidden">&times;</span></button>
    <h1>Detailed informations</h1> 
    <h2>{{vehicle?.make}} {{vehicle?.model}}</h2>
    <h3>Car price: {{vehicle?.price}}$</h3>
    <h5>Year of production: {{vehicle?.year}} </h5>
    <h6>Date added: {{vehicle?.date_Added}}</h6>
    <div class="row">
      <div class="col-12 col-sm-8"> 
        <p>Where can you find this car?</p>
        <p>{{warehouse?.name}} - {{warehouse?.cars?.location}}</p>
        <p>Lattitude: {{warehouse?.location?.lat}} </p> 
        <p>Longitude: {{warehouse?.location?.long}}</p>
      </div>
      <div class="col-0 col-sm-4">
        <div class="mercedes-img"></div>
      </div>
      
    </div>
    </div>

  `
})

export class ModalContentComponent implements OnInit {
  closeBtnName?: string;
  warehouse?: Warehouse;
  vehicle?: Vehicle;
  
  constructor(public bsModalRef: BsModalRef) {}
 
  ngOnInit() {
    
  }

}
