import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesItemComponent } from './vehicles-item.component';

describe('VehiclesItemComponent', () => {
  let component: VehiclesItemComponent;
  let fixture: ComponentFixture<VehiclesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
