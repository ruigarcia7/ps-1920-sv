import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AthleteComponent } from './athlete.component';
import { AthleteRoutingModule } from './athlete-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AthleteRoutingModule,
    MatTableModule
  ],
  declarations: [
    AthleteComponent,
  ]
})
export class AthleteModule { }
