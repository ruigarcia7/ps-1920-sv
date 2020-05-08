import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AthleteProfileComponent } from './athlete-profile.component';

const routes: Routes = [
  {
    path: '',
    component: AthleteProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AthleteProfileRoutingModule { }
