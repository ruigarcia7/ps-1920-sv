import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GameComponent } from './game.component';
import { GameRoutingModule } from './game-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { GamePopoverComponent } from './game-popover/game-popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameRoutingModule,
    MatSortModule,
    MatTableModule
  ],
  declarations: [
    GameComponent,
    GamePopoverComponent
  ]
})

export class GameModule { }
