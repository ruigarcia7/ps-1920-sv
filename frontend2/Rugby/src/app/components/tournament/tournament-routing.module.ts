import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TournamentComponent } from './tournament.component';

const routes: Routes = [
  {
    path: '',
    component: TournamentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentRoutingModule { }
