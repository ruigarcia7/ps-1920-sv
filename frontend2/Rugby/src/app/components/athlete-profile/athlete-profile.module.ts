import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AthleteProfileComponent } from './athlete-profile.component';
import { AthleteProfileRoutingModule } from './athlete-profile-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from "@angular/material/table";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AthleteProfileRoutingModule,
        MatGridListModule,
        MatTableModule
    ],
  declarations: [
    AthleteProfileComponent,
  ]
})
export class AthleteProfileModule { }
