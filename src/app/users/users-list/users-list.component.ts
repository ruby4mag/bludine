import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  user: any;
  users?: User[];
  currentUser: User = {
    username: '',
    email: '',
  };
  dummy: '';
  message = '';
  currentIndex = -1
  constructor(public router: Router, private userService: UserService) { }

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


