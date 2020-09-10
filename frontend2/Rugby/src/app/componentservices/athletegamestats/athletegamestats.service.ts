import { Injectable } from '@angular/core';
import {AthleteGameStats} from '../../classes/associations/AthleteGameStats';
import {Stats} from '../../classes/stats';
import {forEach} from '@angular-devkit/schematics';
import {Game} from '../../classes/game';
import {ActiveRoster} from '../../classes/associations/ActiveRoster';
import {Athlete} from '../../classes/athlete';

@Injectable({
  providedIn: 'root'
})
export class AthleteGameStatsService {
  spectrum: string[] = ['blue', 'red',  'gold', 'mediumseagreen', 'dodgerblue', 'orangered', 'turquoise',
    'limegreen', 'orange', 'green', 'blue', 'red',  'gold', 'mediumseagreen', 'dodgerblue', 'orangered', 'turquoise',
    'limegreen', 'orange', 'green'];

  constructor() { }

  getTotal(stats: AthleteGameStats[]) {
    const acc: Stats = new Stats();
    Object.keys(acc).forEach( key => {
      stats.forEach( stat => {
        acc[key] += stat.stats[key];
      });
    });
    debugger;
    return acc;
  }

  getColor(index) {
    return this.spectrum[index % this.spectrum.length];
  }

  formatDate(date: Date) {
    const datestring = date.getFullYear()
      + '/' + (date.getMonth() + 1)
      + '/' + date.getDate()
      + ' ' + date.getHours()
      + ':' + date.getMinutes();
    return datestring;
  }

  pushGames(filtered: any, ags: AthleteGameStats[]) {
    debugger;
    const ids = filtered;
    filtered = [];
    ids.forEach(id => {
      filtered.push.apply(filtered, ags.filter(ag => ag.game.id.toString().localeCompare(id) === 0 ));
    });
    return filtered;
  }

  pushAthletes(filtered: any, ags: AthleteGameStats[]) {
    debugger;
    const ids = filtered;
    filtered = [];
    ids.forEach(id => {
      filtered.push.apply(filtered, ags.filter(ag => ag.athlete.id.toString().localeCompare(id) === 0 ));
    });
    return filtered;
  }

  generateStats(ags: AthleteGameStats[], game: Game) {
    game.athletes.forEach(athlete => {
      if (ags.filter(stat => stat.athlete.id === athlete.id).length === 0) {
        ags.push(new AthleteGameStats(null, athlete, new Stats(), game));
      }
    });
    return ags;
  }

  getPositionName(positions: any, ar: ActiveRoster) {
    return positions.filter(position => position.id === ar.number)[0].name;
  }

  getAthleteStats(a: Athlete, ags: AthleteGameStats[]) {
    return ags.filter(ag => ag.athlete.id === a.id)[0];
  }
}
