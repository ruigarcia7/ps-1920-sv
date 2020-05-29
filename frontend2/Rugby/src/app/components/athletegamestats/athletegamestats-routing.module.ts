import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AthleteGameStatsComponent } from './athletegamestats.component';

const routes: Routes = [
  {
    path: '',
    component: AthleteGameStatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AthleteGameStatsRoutingModule { }
