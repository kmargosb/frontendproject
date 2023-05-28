import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsProductComponent } from './cards-product.component';

describe('CardsProductComponent', () => {
  let component: CardsProductComponent;
  let fixture: ComponentFixture<CardsProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsProductComponent]
    });
    fixture = TestBed.createComponent(CardsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
