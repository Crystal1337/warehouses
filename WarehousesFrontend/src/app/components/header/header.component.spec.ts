import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/Cart';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  let router: Router;
  let cartServiceStub: Partial<ShoppingCartService> = {
    getCart: function(){
      return {vehicles: [], amount: 0}
    }
  };
  let cartService: ShoppingCartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: ShoppingCartService, useValue: cartServiceStub},
        {provide: Router, useValue: {url: "checkout"}}
      ]
    })

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    cartService = TestBed.inject(ShoppingCartService);
    router = TestBed.inject(Router);
    fixture.detectChanges();  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true if ulr is equal', () => {
    expect(component.hasRoute(router.url)).toEqual(true);
  })

  it('should return false if url is different', () => {
    expect(component.hasRoute('vehiclelist')).toEqual(false);
  })
});
