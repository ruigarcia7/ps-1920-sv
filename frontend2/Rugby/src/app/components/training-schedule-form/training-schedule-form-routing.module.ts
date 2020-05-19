import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrainingScheduleFormComponent } from './training-schedule-form.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingScheduleFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingScheduleFormRoutingModule { }
