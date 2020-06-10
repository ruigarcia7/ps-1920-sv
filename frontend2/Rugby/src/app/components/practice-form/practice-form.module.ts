import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PracticeFormComponent } from './practice-form.component';
import { PracticeFormRoutingModule } from './practice-form-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {PracticeFormModalComponent} from './practice-form-modal/practice-form-modal.component';
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PracticeFormRoutingModule,
    MatGridListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    PracticeFormComponent,
    PracticeFormModalComponent
  ]
})

export class PracticeFormModule { }
