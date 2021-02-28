import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { RestaurantService } from '../../../_services/restaurant.service';
import { Restaurant } from '../../../models/restaurant.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-restaurant-tablemetadata',
  templateUrl: './restaurant-tablemetadata.component.html',
  styleUrls: ['./restaurant-tablemetadata.component.scss']
})
export class RestaurantTablemetadataComponent implements OnInit {

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
  dummy: any;

  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = "Magin George"


  table: FormGroup;
  id: string = '';
  tabledetails: any;
  tabledis: any;


  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.restaurantService.get(this.id)
      .subscribe(
        data => {
          this.currentRestaurant = data.restaurants[0];
          console.log(data.restaurants)
          this.tabledetails = (typeof this.currentRestaurant.tablemetadata === 'undefined' || this.currentRestaurant.tablemetadata == null) ? { "table": { "items": [] } } : this.currentRestaurant.tablemetadata
          this.tabledis = this.tabledetails.table.items


          this.table = this.fb.group({
            items: this.fb.array([])
          });

          if (this.tabledis.length != 0) {
            this.tabledis.forEach((obj, index) => {
              console.log('before transform, this : ' + this);
              (this.table.controls['items'] as FormArray).push(this.createItemtable1(obj));
            });
          }

          console.log(data);
        },
        error => {
          console.log(error);
        });

    this.currentid = this.id;
  }

  createItemtable1(ob) {
    return this.fb.group(ob)
  }

  createItemtable() {
    return this.fb.group({
      name: [''],
      capacity: ['']
    })
  }

  addNexttable() {
    (this.table.controls['items'] as FormArray).push(this.createItemtable())
  }

  removeItemtable(index) {
    (this.table.controls['items'] as FormArray).removeAt(index);
  }

  saveTable(): void {
    const data = {
      tablemetadata: {
        table: this.table.value
      }
    };
    this.restaurantService.updateTable(this.id, data)
      .subscribe(
        response => {
          console.log(response);
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
  }
}


