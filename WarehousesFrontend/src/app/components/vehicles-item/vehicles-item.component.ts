import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/Vehicle';

@Component({
  selector: 'app-vehicles-item',
  templateUrl: './vehicles-item.component.html',
  styleUrls: ['./vehicles-item.component.css']
})
export class VehiclesItemComponent implements OnInit {
  @Input() vehicle?: Vehicle;

  constructor() { }

  ngOnInit(): void {
  }

}
