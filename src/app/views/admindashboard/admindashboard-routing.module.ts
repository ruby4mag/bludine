import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmindashboardComponent } from './admindashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdmindashboardComponent,
    data: {
      title: 'Dashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmindashboardRoutingModule { }
