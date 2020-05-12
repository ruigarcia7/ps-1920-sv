import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EventComponent } from './event.component';
import { EventRoutingModule } from './event-routing.module';
import {MatTableModule} from "@angular/material/table";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventRoutingModule,
    MatTableModule
  ],
  declarations: [
    EventComponent,
  ]
})
export class EventModule { }
