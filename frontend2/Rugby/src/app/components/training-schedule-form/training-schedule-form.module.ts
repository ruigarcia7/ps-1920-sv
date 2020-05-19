import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TrainingScheduleFormComponent } from './training-schedule-form.component';
import { TrainingScheduleFormRoutingModule } from './training-schedule-form-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingScheduleFormRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule
  ],
  declarations: [
    TrainingScheduleFormComponent
  ]
})

export class TrainingScheduleFormModule { }
