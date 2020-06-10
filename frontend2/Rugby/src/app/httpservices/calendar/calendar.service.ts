import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EventService } from '../../httpservices/event/event.service';
import { GameService } from '../../httpservices/game/game.service';
import { HttpPracticeService } from '../../httpservices/practice/practice.service';
import {TournamentService} from '../../httpservices/tournament/tournament.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http: HttpClient, private eventService: EventService,
              private gameService: GameService, private tournamentService: TournamentService,
              private practiceService: HttpPracticeService) { }

  getInfo(): Observable<any[]> {
    let resp1 = this.practiceService.getPractices();
    let resp2 = this.gameService.getGames();
    let resp3 = this.eventService.getEvents();
    let resp4 = this.tournamentService.getTournaments();
    return forkJoin([resp1, resp2, resp3, resp4]);
  }

  isGame(item: any) {
    return item.opponent !== undefined;
  }

  isEvent(item: any) {
    return item.name !== undefined && !this.isTournament(item);
  }

  isPractice(item: any) {
    return !this.isGame(item) && !this.isEvent(item) && !this.isTournament(item);
  }

  isTournament(item: any) {
    return item.classification !== undefined;
  }

  sortByDate(items: any[]) {
    debugger;
    return items.sort((a, b) => {
      return (new Date(a.date) as any) - (new Date(b.date) as any);
    });
  }

  getUpcomming(items, range) {
    let today = new Date();
    return items.filter(item => {
      if (item.date === undefined) return false;
      let itemDate = new Date(item.date);
      return (today.getTime() <= itemDate.getTime() && itemDate.getTime() <= range);
    });
  }

  getPast(items) {
    let today = new Date();
    return items.filter(item => {
      if (item.date === undefined) return false;
      let itemDate = new Date(item.date);
      return (today.getTime() > itemDate.getTime());
    });
  }

  filterGame(items) {
    return items.filter(item => {
     return this.isGame(item);
    });
  }

  unfilterGame(items) {
    return items.filter(item => {
      return !this.isGame(item);
    });
  }

  filterTournament(items) {
    return items.filter(item => {
      return this.isTournament(item);
    });
  }

  unfilterTournament(items) {
    return items.filter(item => {
      return !this.isTournament(item);
    });
  }

  filterPractice(items) {
    return items.filter(item => {
      return this.isPractice(item);
    });
  }

  unfilterPractice(items) {
    return items.filter(item => {
      return !this.isPractice(item);
    });
  }

  filterEvent(items) {
    return items.filter(item => {
      return this.isEvent(item);
    });
  }

  unfilterEvent(items) {
    return items.filter(item => {
      return !this.isEvent(item);
    });
  }

  addDays(date, days) {
    return date.setDate(date.getDate() + days);
  }

  searchFilter(items, word) {
    debugger;
    return items.filter(item => {
        if(this.isGame(item))
          return item.opponent.name.toLowerCase().includes(word) || item.local.toLowerCase().includes(word);
        if(this.isPractice(item))
          return item.local.toLowerCase().includes(word);
        return item.local.toLowerCase().includes(word) || item.name.toLowerCase().includes(word);
    });
  }

  getRemainingTime(item) {
    let today = new Date();
    let itemdate = new Date(item.date);
    let d = itemdate.getTime() - today.getTime();
    let weekdays = Math.floor(d/1000/60/60/24/7);
    let days     = Math.floor(d/1000/60/60/24 - weekdays*7);
    let hours    = Math.floor(d/1000/60/60    - weekdays*7*24         - days*24);
    let minutes  = Math.floor(d/1000/60       - weekdays*7*24*60      - days*24*60  - hours*60);
    /*// let seconds  = Math.floor(d/1000          - weekdays*7*24*60*60   - days*24*60  - hours*60  - minutes*60);
    let t = {};
    ['weekdays', 'days', 'hours', 'minutes', 'seconds'].forEach( q => { t[q] = eval(q); });*/
    debugger;
    return this.remainingToString(weekdays, days, hours, minutes);
  }

  remainingToString(weekdays, days, hours, minutes) {
    debugger;
    let w = weekdays > 10 ? weekdays + 'w ' : '0' + weekdays + 'w ';
    let d = days > 10 ? days + 'd ' : '0' + days + 'd ';
    let h = hours > 10 ? hours + 'h ' : '0' + hours + 'h ';
    let m = minutes > 10 ? minutes + 'm' : '0' + minutes + 'm';
    return`${w}${d}${h}${m}`;
  }
}
