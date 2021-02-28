import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { RestaurantService } from '../../../_services/restaurant.service';
import { Restaurant } from '../../../models/restaurant.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit {
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
  };
  message = '';
  currentid = '';

  veg: FormGroup;
  nonveg: FormGroup;
  id: string = '';
  menus: any;
  vegdis: any;
  nonvegdis: any;

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.restaurantService.get(this.id)
      .subscribe(
        data => {
          this.currentRestaurant = data.restaurants[0];
          this.menus = (typeof this.currentRestaurant.menu === 'undefined') ? { "veg": { "items": [] }, "nonveg": { "items": [] } } : this.currentRestaurant.menu
          this.vegdis = this.menus.veg.items
          this.nonvegdis = this.menus.nonveg.items

          this.veg = this.fb.group({
            items: this.fb.array([])
          });

          if (this.vegdis.length != 0) {
            this.vegdis.forEach((obj, index) => {
              console.log('before transform, this : ' + this);
              (this.veg.controls['items'] as FormArray).push(this.createItemveg1(obj));
            });
          }

          this.nonveg = this.fb.group({
            items: this.fb.array([])
          });

          if (this.nonvegdis.length != 0) {
            this.nonvegdis.forEach((obj, index) => {
              console.log('before transform, this : ' + this);
              (this.nonveg.controls['items'] as FormArray).push(this.createItemveg1(obj));
            });
          }
          console.log(data);
        },
        error => {
          console.log(error);
        });

    this.currentid = this.id;
  }

  createItemveg1(ob) {
    return this.fb.group(ob)
  }

  createItemveg() {
    return this.fb.group({
      name: [''],
      price: ['']
    })
  }

  addNextveg() {
    (this.veg.controls['items'] as FormArray).push(this.createItemveg())
  }

  removeItemveg(index) {
    (this.veg.controls['items'] as FormArray).removeAt(index);
  }

  createItemnonveg() {
    return this.fb.group({
      name: [''],
      price: ['']
    })
  }

  addNextnonveg() {
    (this.nonveg.controls['items'] as FormArray).push(this.createItemnonveg())
  }

  removeItemnonveg(index) {
    (this.nonveg.controls['items'] as FormArray).removeAt(index);
  }

  saveMenu(): void {
    const data = {
      menu: {
        veg: this.veg.value,
        nonveg: this.nonveg.value
      }
    };
    this.restaurantService.updateMenu(this.id, data)
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
