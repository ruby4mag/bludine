import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../../_services/restaurant.service';
import { Restaurant } from '../../../models/restaurant.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent implements OnInit {

  restaurant: Restaurant = {
    name: '',
    description: '',
    address: '',
    pincode: '',
    mobilenumber: '',
    veg: false,
    nonveg: false,
    beverages: false,
    active: false,
    email: '',
    published: false
  };
  submitted = false;

  constructor(public router: Router, private restaurantService: RestaurantService) { }

  ngOnInit(): void {
  }
  saveRestaurant(): void {
    const data = {
      name: this.restaurant.name,
      description: this.restaurant.description,
      address: this.restaurant.address,
      pincode: this.restaurant.pincode,
      mobilenumber: this.restaurant.mobilenumber,
      veg: this.restaurant.veg,
      nonveg: this.restaurant.nonveg,
      beverages: this.restaurant.beverages,
      active: this.restaurant.active,
      email: this.restaurant.email,
    };

    this.restaurantService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.reloadPage();
        },
        error => {
          console.log(error);
        });


  }



  newRestaurant(): void {
    this.submitted = false;
    this.restaurant = {
      name: '',
      description: '',
      published: false
    };
  }
  cancel(): void {
    this.reloadPage();
  }

  reloadPage(): void {
    this.router.navigate(['/restaurants']);
    //window.location.reload();

  }

}
