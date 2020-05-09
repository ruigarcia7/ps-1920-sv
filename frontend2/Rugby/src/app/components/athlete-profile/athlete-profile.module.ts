import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AthleteProfileComponent } from './athlete-profile.component';
import { AthleteProfileRoutingModule } from './athlete-profile-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AthleteProfileRoutingModule
  ],
  declarations: [
    AthleteProfileComponent,
  ]
})
export class AthleteProfileModule { }
