import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TournamentComponent } from './tournament.component';
import { TournamentRoutingModule } from './tournament-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TournamentRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    TournamentComponent,
  ]
})

export class TournamentModule { }
