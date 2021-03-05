import { Component, OnInit } from '@angular/core';
import { RestaurantUserService } from '../../_services/restaurantuser.service';
import { Restaurantuser } from '../../models/restaurantuser.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './restaurantusers-list.component.html',
  styleUrls: ['./restaurantusers-list.component.scss']
})
export class RestaurantUsersListComponent implements OnInit {
  user: any;
  users?: Restaurantuser[];
  currentUser: Restaurantuser = {
    username: '',
    email: '',
  };
  dummy: '';
  message = '';
  currentIndex = -1
  constructor(public router: Router, private userService: RestaurantUserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers()
      .subscribe(
        response => {
          console.log(response);
          this.users = JSON.parse(response);
        },
        error => {
          console.log(error);
        });
  }



}


