import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Vehicle } from 'src/app/models/Vehicle';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Warehouse } from 'src/app/models/Warehouse';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { VehicleDetailed } from 'src/app/models/VehicleDetailed';

@Component({
  selector: 'app-vehicles-item',
  templateUrl: './vehicles-item.component.html',
  styleUrls: ['./vehicles-item.component.css']
})
export class VehiclesItemComponent implements OnInit {
  @Input() vehicle?: Vehicle;
  @Input() warehouse?: Warehouse;
  @Output() onClickVehicle: EventEmitter<VehicleDetailed> = new EventEmitter;
  @Output() onClickAddToCart: EventEmitter<Vehicle> = new EventEmitter;
  @Output() onClickRemoveToCart: EventEmitter<Vehicle> = new EventEmitter;
  inCart?: boolean = false;

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.isInCart(this.vehicle);
  }

  onClick(vehicle: Vehicle, warehouse: Warehouse){
    this.onClickVehicle.emit({vehicle: vehicle ,warehouse: warehouse});
  }

  onAddCart(vehicle: Vehicle) {
    this.onClickAddToCart.emit(vehicle);
    this.inCart = !this.inCart;
  }

  onRemoveCart(vehicle: Vehicle) {
    this.onClickRemoveToCart.emit(vehicle);
    this.inCart = !this.inCart;
  }

  isInCart(vehicle?: Vehicle) {  
      this.inCart = this.cartService.InCart(vehicle);
  }

}
