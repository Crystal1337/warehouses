import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { VehiclesItemComponent } from './components/vehicles-item/vehicles-item.component';

const appRoutes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'carlist', component: VehiclesComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    VehiclesComponent,
    LoadingScreenComponent,
    VehiclesItemComponent,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    BrowserAnimationsModule, 
    CollapseModule, 
    BsDropdownModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
