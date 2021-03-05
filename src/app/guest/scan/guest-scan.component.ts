import { Component, OnInit,TemplateRef } from '@angular/core';
import { GuestScanService } from '../../_services/guestscan.service';

import { Restaurant } from '../../models/restaurant.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './guest-scan.component.html',
  styleUrls: ['./guest-scan.component.scss']
})
export class GuestScanComponent implements OnInit {
  modalRef: BsModalRef;
  temp: any;
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
    published: false,
    tableinfo: {}
  };
  message = '';
  currentIndex = -1
  showCustomerForm: boolean ;
  customername: any;
  customeremail: any;
  customermobile: any; 
  tableName: String;
  buttonText: String;
  pin: any;
  content: string;
  showPinForm: boolean;
  showMenu: boolean;
  menu: any;
  restaurantname: string;

  constructor(private modalService: BsModalService, public router: Router, private guestScanService: GuestScanService,private route: ActivatedRoute) { }

  //getAll


  ngOnInit(): void {
    this.scanCode(this.route.snapshot.params.restaurantid,this.route.snapshot.params.tableid);
    this.showPinForm = true;
    this.showMenu = false;
  }
  scanCode(restaurantid: string, tableid: string): void {
    this.guestScanService.scan(restaurantid,tableid)
      .subscribe(
        data => {
          this.currentRestaurant = data.restaurants[0];
          console.log(data);
        },
        error => {
          console.log(error);
        });
      }
  submitPin(){
    this.guestScanService.submitPin(this.route.snapshot.params.restaurantid,this.route.snapshot.params.tableid,this.pin)
      .subscribe(
        data => {
          if (data.hasOwnProperty('pay') && data['pay']['pin'] == 'failed' ){
            this.content = "Invalid PIN. Try Again.."
          }else{
            this.content = '';
            this.showPinForm = false;
            this.menu = data['restaurants'][0]['menu']
            this.showMenu = true;
            this.restaurantname = data['restaurants'][0].name
          }
        },
        error => {
          console.log(error);
        });
      }
  }


  
