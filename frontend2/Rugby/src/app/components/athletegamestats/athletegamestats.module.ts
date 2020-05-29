import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AthleteGameStatsRoutingModule } from './athletegamestats-routing.module';
import { MatTableModule } from '@angular/material/table';
import { AthleteGameStatsComponent} from './athletegamestats.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AthleteGameStatsRoutingModule,
    MatTableModule
  ],
  declarations: [
    AthleteGameStatsComponent,
  ]
})
export class AthleteGameStatsModule { }
