import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { CalendarComponent } from '../calendar/calendar.component';


const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'calendar',
        children: [
          {
            path: '',
            component: CalendarComponent,
          },
          {
            path: 'calendar',
            loadChildren: () => import('../calendar/calendar.module').then(m => m.CalendarModule)
          }
        ]
      },
      {
        path: 'athlete',
        children: [
          {
            path: '',
            loadChildren: () => import('../athlete/athlete.module').then(m => m.AthleteModule)
          },
          {
            path: 'athlete-profile/:id',
            loadChildren: () => import('../athlete-profile/athlete-profile.module').then(m => m.AthleteProfileModule)
          },
          {
            path: 'post',
            loadChildren: () => import('../athlete-form/athlete-form.module').then(m => m.AthleteFormModule)
          },
          {
            path: 'update/:id',
            loadChildren: () => import('../athlete-form/athlete-form.module').then(m => m.AthleteFormModule)
          }
        ]
      },
      {
        path: 'staff',
        children: [
          {
            path: '',
            loadChildren: () => import('../staff/staff.module').then(m => m.StaffModule)
          },
          {
            path: 'staff-profile/:id',
            loadChildren: () => import('../staff-profile/staff-profile.module').then(m => m.StaffProfileModule)
          },
          {
            path: 'post',
            loadChildren: () => import('../staff-form/staff-form.module').then(m => m.StaffFormModule)
          },
          {
            path: 'update/:id',
            loadChildren: () => import('../staff-form/staff-form.module').then(m => m.StaffFormModule)
          }
        ]
      },
      {
        path: 'event',
        children: [
          {
            path: '',
            loadChildren: () => import('../event/event.module').then(m => m.EventModule)
          },
          {
            path: 'post',
            loadChildren: () => import('../event-form/event-form.module').then(m => m.EventFormModule)
          }
        ]
      },
      {
        path: 'practice',
        children: [
          {
            path: '',
            loadChildren: () => import('../practice/practice.module').then(m => m.PracticeModule)
          },
          {
            path: 'post',
            loadChildren: () => import('../practice-form/practice-form.module').then(m => m.PracticeFormModule)
          }
        ]
      },
      {
        path: 'game',
        children: [
          {
            path: '',
            loadChildren: () => import('../game/game.module').then(m => m.GameModule)
          }
          ]
      },
      {
        path: 'tournament',
        children: [
          {
            path: '',
            loadChildren: () => import('../tournament/tournament.module')
              .then(m => m.TournamentModule)
          }
        ]
      },
      {
        path: 'training-schedule',
        children: [
          {
            path: '',
            loadChildren: () => import('../trainingschedule/trainingschedule.module')
              .then(m => m.TrainingScheduleModule)
          }
          ]
      },
      {
        path: 'stats',
        children: [
          {
            path: '',
            loadChildren: () => import('../stats/stats.module').then(m => m.StatsModule)
          }
          ]
      },
      {
        path: 'injury',
        children: [
          {
            path: '',
            loadChildren: () => import('../injuries/injuries.module').then(m => m.InjuriesModule)
          }
          ]
      },
      {
        path: 'opponent',
        children: [
          {
            path: '',
            loadChildren: () => import('../opponent/opponent.module').then(m => m.OpponentModule)
          }
          ]
      },
      {
        path: '',
        redirectTo: '/calendar',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

