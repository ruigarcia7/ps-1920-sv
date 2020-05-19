import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StatsFormComponent } from './stats-form.component';
import { StatsFormRoutingModule } from './stats-form-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatsFormRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule
  ],
  declarations: [
    StatsFormComponent
  ]
})

export class StatsFormModule { }
