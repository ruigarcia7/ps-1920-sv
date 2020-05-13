import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EventComponent } from './event.component';
import { EventPopoverComponent} from './event-popover/event-popover.component';
import { EventRoutingModule } from './event-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventRoutingModule,
    MatTableModule,
    MatSortModule
  ],
  declarations: [
    EventComponent,
    EventPopoverComponent
  ]
})
export class EventModule { }
