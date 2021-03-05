import { Component, OnInit,TemplateRef } from '@angular/core';
import { RestaurantManagerService } from '../../_services/restaurantmanager.service';
import { Restaurant } from '../../models/restaurant.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-manager.component.html',
  styleUrls: ['./restaurant-manager.component.scss']
})
export class RestaurantManagerComponent implements OnInit {
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


  constructor(private modalService: BsModalService, public router: Router, private restaurantmanagerService: RestaurantManagerService,private route: ActivatedRoute,) { }

  //getAll


  ngOnInit(): void {
    this.getRestaurantmanage(this.route.snapshot.params.id);
  }
  getRestaurantmanage(id: string): void {
    this.restaurantmanagerService.getRestaurantmanage(id)
      .subscribe(
        data => {
          this.currentRestaurant = data.restaurants[0];
          console.log(data);
        },
        error => {
          console.log(error);
        });
      }
  onClick(name: string,template: TemplateRef<any>, restaurant: any): void {
    console.log("Table Name Is "+ name)
    this.temp = name
    this.showCustomerForm = true ;
    console.log("show is reset" + this.showCustomerForm)
    if (restaurant.tableinfo.hasOwnProperty(name) && restaurant.tableinfo[name]['assigned']){
      this.customername = restaurant.tableinfo[name]['customer']['customername'];
      this.customermobile = restaurant.tableinfo[name]['customer']['customermobile'];
      this.customeremail = restaurant.tableinfo[name]['customer']['customeremail'];
      this.buttonText = 'Unassign'
    }else{
      this.customername = '';
      this.customermobile = '';
      this.customeremail = '';
      this.buttonText = 'Assign'
    }
    this.modalRef = this.modalService.show(template);
  }
  assign(name: string): void{
    this.tableName = name;
    this.showCustomerForm = true ;
    this.customername = '';
    this.customermobile = '';
    this.customeremail = '';
    console.log("show is " + this.showCustomerForm)
    console.log("Table Name Is Assigned"+ name)
  }
  onAssign(buttonText: string, tablename: string,template: TemplateRef<any>): void {
    this.tableName = tablename;
    var data = {}
    console.log("Customer Name is " + this.customername)
    console.log("Customer Email is " + this.customeremail)
    console.log("Customer Mobile is " + this.customermobile)
    console.log("Customer Table is " + this.tableName)
    if (buttonText == 'Assign') {
       data = {
        tableinfo: {
            table: this.tableName,
            customer: {
              customername: this.customername,
              customeremail: this.customeremail,
              customermobile: this.customermobile
            },
            assigned: true
        }
      }
    }
    if (buttonText == 'Unassign') {
       data = {
        tableinfo: {
            table: this.tableName,
            customer: {
              customername: '',
              customeremail: '',
              customermobile: ''
            },
            assigned: false
        }
      }
    }    
    this.restaurantmanagerService.assignTable(this.currentRestaurant.id,data)
    .subscribe(
      data => { 
        //this.currentRestaurant = data.restaurants[0];
        console.log("Response is "+data);
        this.showCustomerForm = false
        this.getRestaurantmanage(this.route.snapshot.params.id);
        //this.router.navigate(['/restaurants']);
      },
      error => {
        console.log(error);
      });


    this.modalRef.hide()

  }
  reloadPage(): void {
    this.router.navigate(['/restaurants']);
    //window.location.reload();
  }
}