import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StaffProfileComponent } from './staff-profile.component';

const routes: Routes = [
  {
    path: '',
    component: StaffProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffProfileRoutingModule { }
