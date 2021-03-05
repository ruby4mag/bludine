import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';
import { MaterialDashboardComponent } from './material-dashboard/material-dashboard.component';
import { DataTablesModule } from "angular-datatables";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './_helpers/auth.interceptor';
import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';
import { HttpClientModule } from '@angular/common/http';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RestaurantLoginComponent } from './views/restaurantlogin/restaurantlogin.component';
import { RestaurantManagerComponent } from './manage/restaurant-manager/restaurant-manager.component';






const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';

import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './_services/auth-guard.service';
import { RestaurantService } from './_services/restaurant.service';
import { UserService } from './_services/user.service';
import { RestaurantUserService } from './_services/restaurantuser.service';
import { RestaurantManagerService } from './_services/restaurantmanager.service';



import { UtilityService } from './_services/utility.service';
import { AddRestaurantComponent } from './restaurant/components/add-restaurant/add-restaurant.component';
import { RestaurantDetailsComponent } from './restaurant/components/restaurant-details/restaurant-details.component';
import { RestaurantListComponent } from './restaurant/components/restaurant-list/restaurant-list.component';
import { RestaurantMenuComponent } from './restaurant/components/restaurant-menu/restaurant-menu.component';
import { RegisterComponent } from './users/register/register.component';
import { RestaurantTablemetadataComponent } from './restaurant/components/restaurant-tablemetadata/restaurant-tablemetadata.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersDetailsComponent } from './users/users-details/users-details.component';
import { RestaurantQrcodeComponent } from './restaurant/components/restaurant-qrcode/restaurant-qrcode.component';
import { RestaurantUserRegisterComponent } from './restaurantusers/restaurantuserregister/restaurantuserregister.component';
import { RestaurantUsersListComponent } from './restaurantusers/restaurantusers-list/restaurantusers-list.component';
import { GuestScanComponent } from './guest/scan/guest-scan.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    IconSetModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule,
    NgxQRCodeModule,
    ModalModule.forRoot()
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RestaurantLoginComponent,
    RegisterComponent,
    RestaurantUserRegisterComponent,
    HomeComponent,
    MaterialDashboardComponent,
    AddRestaurantComponent,
    RestaurantDetailsComponent,
    RestaurantListComponent,
    RestaurantMenuComponent,
    RestaurantTablemetadataComponent,
    UsersListComponent,
    UsersDetailsComponent,
    RestaurantQrcodeComponent,
    RestaurantUsersListComponent,
    RestaurantManagerComponent,
    GuestScanComponent
  ],
  providers: [AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    IconSetService,
    RestaurantService,
    UtilityService,
    UserService,
    RestaurantUserService,
    RestaurantManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
