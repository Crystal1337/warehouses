import { Component, OnInit, TemplateRef } from '@angular/core';
import { Vehicle } from 'src/app/models/Vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Warehouse } from 'src/app/models/Warehouse';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
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

  constructor(private vehicleService: VehicleService, private modalService: BsModalService, private cartService: ShoppingCartService, private router: Router) { 
    
  }
  
  ngOnInit(): void {
    //get all vehicles + adequate warehouse the vehicle is in
      this.vehicleService.getVehicles().subscribe(result => {
        result.forEach(warehouse => {
          warehouse.cars.vehicles.forEach(vehicle => { 
            this.detailed.push({vehicle, warehouse});   
          });
        });
        this.detailed.sort((a:VehicleDetailed, b:VehicleDetailed) => ((new Date(a.vehicle.date_Added).getTime() - new Date(b.vehicle.date_Added).getTime())));
      });
      
      window.scrollTo(0,0);
  }

  openModal(template: TemplateRef<any>, vehicle: Vehicle, warehouse: Warehouse) {  
    //assign vehicle and warehouse to modal when it's opened
    this.modalRef = this.modalService.show(ModalContentComponent);
    this.modalRef.content.vehicle = vehicle;
    this.modalRef.content.warehouse = warehouse;
  }

  addToCart(vehicle: Vehicle) {
    this.cartService.addVehicle(vehicle);
  }

  removeToCart(vehicle: Vehicle) {
    this.cartService.removeVehicle(vehicle);
  }
}

@Component({
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
  warehouse?: Warehouse;
  vehicle?: Vehicle;
  
  constructor(public bsModalRef: BsModalRef) {}
 
  ngOnInit() {
    
  }

}
