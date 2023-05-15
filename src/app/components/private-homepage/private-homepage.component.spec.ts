import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateHomepageComponent } from './private-homepage.component';

describe('PrivateHomepageComponent', () => {
  let component: PrivateHomepageComponent;
  let fixture: ComponentFixture<PrivateHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivateHomepageComponent]
    });
    fixture = TestBed.createComponent(PrivateHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
