import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StaffFormComponent } from './staff-form.component';
import { StaffFormRoutingModule } from './staff-form-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { StaffModule } from '../staff/staff.module';
import {StaffComponent} from '../staff/staff.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffFormRoutingModule,
    MatGridListModule,
    StaffModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  declarations: [
    StaffFormComponent,
  ],
  providers: [
    StaffComponent
  ]
})

export class StaffFormModule { }
