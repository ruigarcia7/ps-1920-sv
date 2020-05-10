import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StaffProfileComponent } from './staff-profile.component';
import { StaffProfileRoutingModule } from './staff-profile-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffProfileRoutingModule,
    MatGridListModule
  ],
  declarations: [
    StaffProfileComponent,
  ]
})
export class StaffProfileModule { }
