import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TournamentFormComponent } from './tournament-form.component';
import { TournamentFormRoutingModule } from './tournament-form-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TournamentFormRoutingModule,
    MatTableModule,
    MatSortModule
  ],
  declarations: [
    TournamentFormComponent,
  ]
})
export class TournamentFormModule { }
