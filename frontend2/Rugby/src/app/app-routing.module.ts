import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'app',
    loadChildren: () => import('./components/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./components/calendar/calendar.module').then(m => m.CalendarModule)
  },
  {
    path: 'athlete',
    loadChildren: () => import('./components/athlete/athlete.module').then(m => m.AthleteModule)
  },
  {
    path: 'staff',
    loadChildren: () => import('./components/staff/staff.module').then(m => m.StaffModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./components/event/event.module').then(m => m.EventModule)
  },
  {
    path: 'practice',
    loadChildren: () => import('./components/practice/practice.module').then(m => m.PracticeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
