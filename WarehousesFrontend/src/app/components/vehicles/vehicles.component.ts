import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/Vehicle';
import { environment } from 'src/environments/environment';
import { filter } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Warehouse } from 'src/app/models/Warehouse';
import { Cars } from 'src/app/models/Cars';
@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  public vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) { 
    
  }

  ngOnInit(): void {
      this.vehicleService.getVehicles().subscribe(result => {
        result.forEach(warehouse => {
          warehouse.cars.vehicles.forEach(vehicle => {
            this.vehicles?.push(vehicle);
          });
        });
        this.vehicles.sort((a: Vehicle, b: Vehicle) => ((new Date(b.date_Added).getTime() - new Date(a.date_Added).getTime())));  
      });
      
      
  }

}
