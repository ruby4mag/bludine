import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../../_services/restaurant.service';
import { UtilityService } from '../../../_services/utility.service';
import { Restaurant } from '../../../models/restaurant.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {
  currentRestaurant: Restaurant = {
    id: '',
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
  };
  message = '';
  currentid = '';
  restaurantusers = []



  constructor(private utilityService:UtilityService,  private restaurantService: RestaurantService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getRestaurant(this.route.snapshot.params.id);
  }
  getRestaurant(id: string): void {
    this.restaurantService.get(id)
      .subscribe(
        data => {
          this.currentRestaurant = data.restaurants[0];
          console.log(data);
        },
        error => {
          console.log(error);
        });       
    this.utilityService.findRestaurantUsers()
      .subscribe(
        data => {
          this.restaurantusers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });

    this.currentid = id;

  }


  //findRestuarantUsers

  updateRestaurant(): void {
    //var id = this.currentRestaurant.id
    this.restaurantService.update(this.currentid, this.currentRestaurant)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
          this.reloadPage();
        },
        error => {
          console.log(error);
        });
  }

  deleteRestaurant(): void {
    //var id = this.currentRestaurant.id
    this.restaurantService.delete(this.currentid)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
          this.reloadPage();
        },
        error => {
          console.log(error);
        });

  }
  cancel(): void {
    this.reloadPage();
  }

  reloadPage(): void {
    this.router.navigate(['/restaurants']);
    //window.location.reload();

  }

}
