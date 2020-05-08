import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StaffComponent } from './staff.component';
import { StaffRoutingModule } from './staff-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffRoutingModule
  ],
  declarations: [
    StaffComponent,
  ]
})
export class StaffModule { }
