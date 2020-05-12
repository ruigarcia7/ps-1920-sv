import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StaffFormComponent } from './staff-form.component';

const routes: Routes = [
  {
    path: '',
    component: StaffFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffFormRoutingModule { }
