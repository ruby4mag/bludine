import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantLoginComponent } from './restaurantlogin.component';

describe('RestaurantLoginComponent', () => {
    let component: RestaurantLoginComponent;
    let fixture: ComponentFixture<RestaurantLoginComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RestaurantLoginComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RestaurantLoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});