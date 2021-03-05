import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RegisterComponent } from './users/register/register.component';
//import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from './_services/auth-guard.service';
import { CardsComponent } from './views/base/cards.component';
import { AddRestaurantComponent } from './restaurant/components/add-restaurant/add-restaurant.component';
import { RestaurantDetailsComponent } from './restaurant/components/restaurant-details/restaurant-details.component';
import { RestaurantListComponent } from './restaurant/components/restaurant-list/restaurant-list.component';
import { RestaurantQrcodeComponent } from './restaurant/components/restaurant-qrcode/restaurant-qrcode.component';
import { RestaurantMenuComponent } from './restaurant/components/restaurant-menu/restaurant-menu.component';
import { RestaurantTablemetadataComponent } from './restaurant/components/restaurant-tablemetadata/restaurant-tablemetadata.component';
import { AdmindashboardModule } from './views/admindashboard/admindashboard.module';
import { AdmindashboardComponent } from './views/admindashboard/admindashboard.component';



// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RestaurantLoginComponent } from './views/restaurantlogin/restaurantlogin.component';

import { UsersListComponent } from './users/users-list/users-list.component';
import { RestaurantUserRegisterComponent } from './restaurantusers/restaurantuserregister/restaurantuserregister.component';
import { RestaurantUsersListComponent } from './restaurantusers/restaurantusers-list/restaurantusers-list.component';
import { RestaurantManagerComponent } from './manage/restaurant-manager/restaurant-manager.component';
import { GuestScanComponent } from './guest/scan/guest-scan.component'

export const routes: Routes = [
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },

  {
    path: '',
    data: { requiresLogin: true },
    canActivate: [AuthGuardService],
    component: DefaultLayoutComponent,
    loadChildren: () => AdmindashboardModule,
    pathMatch: 'full'
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'admin/login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'restaurant/login',
    component: RestaurantLoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
      requiresLogin: true
    },

    canActivate: [AuthGuardService],
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      },
      {
        path: 'admindashboard',
        loadChildren: () => import('./views/admindashboard/admindashboard.module').then(m => m.AdmindashboardModule)
      },
      {
        path: 'restaurants/add', component: AddRestaurantComponent
      },
      {
        path: 'restaurants/:id/qrcode', component: RestaurantQrcodeComponent
      },
      {
        path: 'restaurants', component: RestaurantListComponent
      },
      {
        path: 'restaurants/:id', component: RestaurantDetailsComponent
      },
      {
        path: 'restaurants/:id/menu', component: RestaurantMenuComponent
      },
      {
        path: 'restaurants/:id/table', component: RestaurantTablemetadataComponent
      },
      {
        path: 'users/list', component: UsersListComponent
      },
      {
        path: 'users/add', component: RegisterComponent,
      },
      {
        path: 'restaurantusers/add', component: RestaurantUserRegisterComponent,
      },
      {
        path: 'restaurantusers/list', component: RestaurantUsersListComponent,
      },
      {
        path: 'manager/manager/:id', component: RestaurantManagerComponent,
      },
      {
        path: 'scan/:restaurantid/:tableid', component: GuestScanComponent,
      },

    ]
  },
  /*
    { path: '', redirectTo: 'restaurants', pathMatch: 'full' },
    { path: 'restaurants', component: RestaurantListComponent, canActivate: [AuthGuardService] },
    { path: 'restaurants/add', component: AddRestaurantComponent, canActivate: [AuthGuardService] },
    { path: 'restaurants/:id', component: RestaurantDetailsComponent, canActivate: [AuthGuardService] },
  */
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
