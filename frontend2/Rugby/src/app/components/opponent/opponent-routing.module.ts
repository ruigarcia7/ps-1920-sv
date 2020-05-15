import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OpponentComponent } from './opponent.component';

const routes: Routes = [
  {
    path: '',
    component: OpponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpponentRoutingModule { }
