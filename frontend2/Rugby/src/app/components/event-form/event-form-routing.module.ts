import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventFormComponent } from './event-form.component';

const routes: Routes = [
  {
    path: '',
    component: EventFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventFormRoutingModule { }
