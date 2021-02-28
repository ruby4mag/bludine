import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AdmindashboardComponent } from './admindashboard.component';
import { AdmindashboardRoutingModule } from './admindashboard-routing.module';

@NgModule({
  imports: [
    FormsModule,
    AdmindashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [AdmindashboardComponent]
})
export class AdmindashboardModule { }
