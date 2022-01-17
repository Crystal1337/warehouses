import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehicle } from '../models/Vehicle';
import { Warehouse } from '../models/Warehouse';

const header:HttpHeaders = new HttpHeaders().set('ApiKey', environment.ApiKey);

@Injectable({
  providedIn: 'root'
})

export class VehicleService {

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>('api/warehouses', {'headers': header});
  }
}
