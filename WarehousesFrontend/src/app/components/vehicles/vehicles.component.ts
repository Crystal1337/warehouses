import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/Vehicle';
import { environment } from 'src/environments/environment';
import { filter } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  public vehicles?: Vehicle[];
  

  constructor(http: HttpClient) { 
    var headers = new HttpHeaders().set('ApiKey', environment.ApiKey);

    http.get<Vehicle[]>('api/vehicles', {'headers': headers})
      .pipe(map(vehicle => vehicle
        .filter(veh => veh.licensed == true)))
          .subscribe(result => {
            this.vehicles = result;
       }, error => console.error(error));
  }

  ngOnInit(): void {
  }

}
