import { Component, OnInit } from '@angular/core';
import { RestaurantUserAuthService } from '../../_services/restaurantuserauth.service';
import { RestaurantService } from '../../_services/restaurant.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './restaurantuserregister.component.html',
  styleUrls: ['./restaurantuserregister.component.css']
})
export class RestaurantUserRegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
    restaurant: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  restaurants = [];

  constructor(private restaurantService: RestaurantService , public router: Router, private authService: RestaurantUserAuthService) { }

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

  onSubmit(): void {
    const { username, email, password , restaurant} = this.form;

    this.authService.register(username, email, password, restaurant).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  reloadPage(): void {
    this.router.navigate(['/restaurantusers/list']);
  }
}
