import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OpponentFormComponent } from './opponent-form.component';
import { OpponentFormRoutingModule } from './opponent-form-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpponentFormRoutingModule
  ],
  declarations: [
    OpponentFormComponent,
  ]
})
export class OpponentFormModule { }
