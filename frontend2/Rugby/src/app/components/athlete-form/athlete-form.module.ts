import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AthleteFormComponent } from './athlete-form.component';
import { AthleteFormRoutingModule } from './athlete-form-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AthleteFormRoutingModule,
    MatGridListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  declarations: [
    AthleteFormComponent,
  ]
})

export class AthleteFormModule { }
