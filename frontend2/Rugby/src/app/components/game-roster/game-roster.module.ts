import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GameRosterComponent } from './game-roster.component';
import { GameRosterRoutingModule } from './game-roster-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameRosterRoutingModule,
    MatSortModule,
    MatTableModule
  ],
  declarations: [
    GameRosterComponent
  ]
})

export class GameRosterModule { }
