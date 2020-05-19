import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TournamentComponent } from './tournament.component';
import { TournamentRoutingModule } from './tournament-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {TournamentPopoverComponent} from './tournament-popover/tournament-popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TournamentRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule
  ],
  declarations: [
    TournamentComponent,
    TournamentPopoverComponent
  ]
})

export class TournamentModule { }
