import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PracticeComponent } from './practice.component';
import { PracticeRoutingModule } from './practice-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { PracticePopoverComponent } from './practice-popover/practice-popover.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PracticeRoutingModule,
        MatTableModule,
        MatSortModule
    ],
  declarations: [
    PracticeComponent,
    PracticePopoverComponent
  ]
})
export class PracticeModule { }
