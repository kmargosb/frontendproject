import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutComponent } from './produt.component';

describe('ProdutComponent', () => {
  let component: ProdutComponent;
  let fixture: ComponentFixture<ProdutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutComponent]
    });
    fixture = TestBed.createComponent(ProdutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
