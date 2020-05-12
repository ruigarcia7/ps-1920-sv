import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PracticeComponent } from './practice.component';
import { PracticeRoutingModule } from './practice-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PracticeRoutingModule
  ],
  declarations: [
    PracticeComponent,
  ]
})
export class PracticeModule { }
