import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../../_services/restaurant.service';
import { Restaurant } from '../../../models/restaurant.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  restaurant: any;
  restaurants?: Restaurant[];
  currentRestaurant: Restaurant = {
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
  message = '';
  currentIndex = -1


  constructor(public router: Router, private restaurantService: RestaurantService) { }

  //getAll


  ngOnInit(): void {
    this.restaurantService.getAll()
      .subscribe(
        response => {
          console.log(response);
          this.restaurants = response;
        },
        error => {
          console.log(error);
        });
  }

  reloadPage(): void {
    this.router.navigate(['/restaurants']);
    //window.location.reload();

  }

}
