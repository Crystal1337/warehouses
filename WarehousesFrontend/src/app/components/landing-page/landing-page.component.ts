import { Component, OnInit } from '@angular/core';
import { faCar, faCircle, faTools, faWarehouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  faTools = faTools;
  faCircle = faCircle;
  faWarehouse = faWarehouse;
  faCar = faCar;

  constructor() { }

  ngOnInit(): void {
  }

}
