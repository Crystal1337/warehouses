import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehicle } from '../models/Vehicle';

const header:HttpHeaders = new HttpHeaders().set('ApiKey', environment.ApiKey);

@Injectable({
  providedIn: 'root'
})

export class VehicleService {

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>('api/vehicles', {'headers': header});
  }
}
