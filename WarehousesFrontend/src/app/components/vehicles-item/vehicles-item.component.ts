import { Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import { Vehicle } from 'src/app/models/Vehicle';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Warehouse } from 'src/app/models/Warehouse';

@Component({
  selector: 'app-vehicles-item',
  templateUrl: './vehicles-item.component.html',
  styleUrls: ['./vehicles-item.component.css']
})
export class VehiclesItemComponent implements OnInit {
  @Input() vehicle?: Vehicle;
  @Input() warehouse?: Warehouse;
  inCart: boolean = false;
  @Output() onClickVehicle: EventEmitter<object> = new EventEmitter;
  @Output() onClickAddToCart: EventEmitter<Vehicle> = new EventEmitter;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  onClick(vehicle: Vehicle, warehouse: Warehouse){
    this.onClickVehicle.emit({vehicle: vehicle ,warehouse: warehouse});
  }

  onClickCart(vehicle: Vehicle) {
    this.onClickAddToCart.emit(vehicle);
    this.inCart = !this.inCart;
  }

}
