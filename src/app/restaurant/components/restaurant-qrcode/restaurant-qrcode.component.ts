import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../../_services/restaurant.service';
import { Restaurant } from '../../../models/restaurant.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-restaurant-qrcode',
  templateUrl: './restaurant-qrcode.component.html',
  styleUrls: ['./restaurant-qrcode.component.scss']
})
export class RestaurantQrcodeComponent implements OnInit {

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
    published: false,
    menu: '',
    tablemetadata: ''
  };
  message = '';
  currentid = '';
  id: string = '';

  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute, private router: Router) { }



  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.restaurantService.get(this.id)
      .subscribe(
        data => {
          this.currentRestaurant = data.restaurants[0];
          console.log(data.restaurants)
          console.log(data);
        },
        error => {
          console.log(error);
        });

    this.currentid = this.id;
  }

}
