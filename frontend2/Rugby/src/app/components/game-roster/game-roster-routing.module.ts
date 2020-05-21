import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameRosterComponent } from './game-roster.component';

const routes: Routes = [
  {
    path: '',
    component: GameRosterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRosterRoutingModule { }
