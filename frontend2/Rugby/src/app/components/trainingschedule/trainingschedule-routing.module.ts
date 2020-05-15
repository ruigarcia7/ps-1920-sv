import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrainingScheduleComponent } from './trainingschedule.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingScheduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingScheduleRoutingModule { }
