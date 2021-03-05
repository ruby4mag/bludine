import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestScanComponent } from './guest-scan.component';

describe('RestaurantListComponent', () => {
  let component: GuestScanComponent;
  let fixture: ComponentFixture<GuestScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestScanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
