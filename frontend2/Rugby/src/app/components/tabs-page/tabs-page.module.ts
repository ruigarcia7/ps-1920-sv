import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';
import {CalendarModule} from '../calendar/calendar.module';
import {StaffModule} from '../staff/staff.module';
import {StaffProfileModule} from '../staff-profile/staff-profile.module';
import {AthleteModule} from '../athlete/athlete.module';
import {AthleteProfileModule} from '../athlete-profile/athlete-profile.module';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CalendarModule,
    StaffModule,
    StaffProfileModule,
    AthleteModule,
    AthleteProfileModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
