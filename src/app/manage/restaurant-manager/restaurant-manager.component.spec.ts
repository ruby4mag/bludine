import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantManagerComponent } from './restaurant-manager.component';

describe('RestaurantListComponent', () => {
  let component: RestaurantManagerComponent;
  let fixture: ComponentFixture<RestaurantManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
