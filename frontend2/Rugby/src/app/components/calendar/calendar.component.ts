import { Component, OnInit } from '@angular/core';
import {Game} from '../../classes/game';
import {Practice} from '../../classes/practice';
import {Event} from '../../classes/event';
import {Tournament} from '../../classes/tournament';
import {CalendarService} from '../../httpservices/calendar/calendar.service';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  upcomming_days = 15;
  segment = 'upcomming';
  showSearchbar: boolean;
  queryText = '';
  info: (Event|Game|Practice|Tournament)[] = [];
  upcomming: (Event|Game|Practice|Tournament)[] = [];
  show: (Event|Game|Practice|Tournament)[] = [];
  past: (Event|Game|Practice|Tournament)[] = [];

  constructor(private calendarService: CalendarService, private menuController: MenuController) { }

  ngOnInit() {
    this.getInfo();
  }

  getInfo() {
    this.calendarService.getInfo().subscribe( resList => {
        this.info.push.apply(this.info, resList[0]);
        this.info.push.apply(this.info, resList[1]);
        this.info.push.apply(this.info, resList[2]);
        this.info.push.apply(this.info, resList[3]);
        this.info = this.calendarService.sortByDate(this.info);
        this.show = this.info;
        this.getUpcomming();
        this.getPast();
    });
  }

  getPast() {
    this.past = this.calendarService.getPast(this.show);
  }

  getUpcomming() {
    debugger;
    this.upcomming = this.calendarService.getUpcomming(this.show,
      this.calendarService.addDays(new Date(), this.upcomming_days));
  }

  getDisplayInfo() {
    if (this.segment === 'past') return this.past;
    return this.segment === 'all' ? this.show : this.upcomming;
  }

  async openFilterMenu() {
    this.menuController.enable(true, 'filter');
    await this.menuController.open('filter');
  }

  async closeFilterMenu() {
    await this.menuController.close('filter');
  }

  filterGame(bool) {
    if (bool) {
      this.show.push.apply(this.show, this.calendarService.filterGame(this.info));
      this.show = this.calendarService.sortByDate(this.show);
    }
    else this.show = this.calendarService.unfilterGame(this.show);
    this.getUpcomming();
    this.getPast();
  }

  filterTournament(bool) {
    if (bool) {
      this.show.push.apply(this.show, this.calendarService.filterTournament(this.info));
      this.show = this.calendarService.sortByDate(this.show);
    }
    else this.show = this.calendarService.unfilterTournament(this.show);
    this.getUpcomming();
    this.getPast();
  }

  filterPractice(bool) {
    if (bool) {
      this.show.push.apply(this.show, this.calendarService.filterPractice(this.info));
      this.show = this.calendarService.sortByDate(this.show);
    }
    else this.show = this.calendarService.unfilterPractice(this.show);
    this.getUpcomming();
    this.getPast();
  }

  filterEvent(bool) {
    if (bool) {
      this.show.push.apply(this.show, this.calendarService.filterEvent(this.info));
      this.show = this.calendarService.sortByDate(this.show);
    }
    else this.show = this.calendarService.unfilterEvent(this.show);
    this.getUpcomming();
    this.getPast();
  }

  gameCheckChange(e) {
    let newState = !e.currentTarget.checked;
    this.filterGame(newState);
  }

  tournamentCheckChange(e) {
    let newState = !e.currentTarget.checked;
    this.filterTournament(newState);
  }

  practiceCheckChange(e) {
    let newState = !e.currentTarget.checked;
    this.filterPractice(newState);
  }

  eventCheckChange(e) {
    let newState = !e.currentTarget.checked;
    this.filterEvent(newState);
  }
}
