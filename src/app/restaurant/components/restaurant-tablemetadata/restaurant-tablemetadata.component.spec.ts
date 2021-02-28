import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantTablemetadataComponent } from './restaurant-tablemetadata.component';

describe('RestaurantTablemetadataComponent', () => {
  let component: RestaurantTablemetadataComponent;
  let fixture: ComponentFixture<RestaurantTablemetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantTablemetadataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantTablemetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
