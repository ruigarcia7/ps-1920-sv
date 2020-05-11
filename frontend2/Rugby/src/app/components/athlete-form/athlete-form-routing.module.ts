import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AthleteFormComponent } from './athlete-form.component';

const routes: Routes = [
  {
    path: '',
    component: AthleteFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AthleteFormRoutingModule { }
