import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TournamentFormComponent } from './tournament-form.component';

const routes: Routes = [
  {
    path: '',
    component: TournamentFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentFormRoutingModule { }
