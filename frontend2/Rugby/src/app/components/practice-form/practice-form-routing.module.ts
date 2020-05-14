import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PracticeFormComponent } from './practice-form.component';

const routes: Routes = [
  {
    path: '',
    component: PracticeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeFormRoutingModule { }
