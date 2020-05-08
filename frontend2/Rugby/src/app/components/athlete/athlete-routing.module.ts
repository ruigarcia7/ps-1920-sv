import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AthleteComponent } from './athlete.component';

const routes: Routes = [
  {
    path: '',
    component: AthleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AthleteRoutingModule { }
