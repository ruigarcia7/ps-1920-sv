import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatsFormComponent } from './stats-form.component';

const routes: Routes = [
  {
    path: '',
    component: StatsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatsFormRoutingModule { }
