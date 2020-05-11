import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AthleteFormComponent } from './athlete-form.component';
import { AthleteFormRoutingModule } from './athlete-form-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AthleteFormRoutingModule,
    MatGridListModule
  ],
  declarations: [
    AthleteFormComponent,
  ]
})

export class AthleteFormModule { }
