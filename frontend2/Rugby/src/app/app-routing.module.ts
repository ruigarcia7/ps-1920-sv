import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/calendar',
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
  },
  {
    path: 'game',
    loadChildren: () => import('./components/game/game.module').then(m => m.GameModule)
  },
  {
    path: 'tournament',
    loadChildren: () => import('./components/tournament/tournament.module')
      .then(m => m.TournamentModule)
  },
  {
    path: 'training-schedule',
    loadChildren: () => import('./components/trainingschedule/trainingschedule.module')
      .then(m => m.TrainingScheduleModule)
  },
  {
    path: 'stats',
    loadChildren: () => import('./components/stats/stats.module').then(m => m.StatsModule)
  },
  {
    path: 'injury',
    loadChildren: () => import('./components/injuries/injuries.module').then(m => m.InjuriesModule)
  },
  {
    path: 'opponent',
    loadChildren: () => import('./components/opponent/opponent.module').then(m => m.OpponentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
