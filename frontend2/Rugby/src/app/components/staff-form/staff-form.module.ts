import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StaffFormComponent } from './staff-form.component';
import { StaffFormRoutingModule } from './staff-form-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffFormRoutingModule,
    MatGridListModule
  ],
  declarations: [
    StaffFormComponent,
  ]
})

export class StaffFormModule { }
