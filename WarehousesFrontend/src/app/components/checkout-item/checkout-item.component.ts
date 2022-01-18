import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/Vehicle';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.css']
})
export class CheckoutItemComponent implements OnInit {
  @Input() item?: Vehicle;

  constructor() { }

  ngOnInit(): void {
  }

}
