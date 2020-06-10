import { Injectable } from '@angular/core';
import {AthleteGameStats} from "../../classes/associations/AthleteGameStats";
import {Stats} from "../../classes/stats";

@Injectable({
  providedIn: 'root'
})
export class AthleteGameStatsService {
  spectrum: string[] = ['blue', 'red',  'gold', 'mediumseagreen', 'dodgerblue', 'orangered', 'turquoise',
    'limegreen', 'orange', 'green'];

  constructor() { }

  getTotal(stats: AthleteGameStats[]) {
    let acc: Stats = new Stats();
    Object.keys(acc).forEach( key => {
      stats.forEach( stat => {
        acc[key] += stat.stats[key];
      });
    });
    debugger;
    return acc;
  }

  getColor(index) {
    return this.spectrum[index];
  }

  formatDate(date: Date) {
    let datestring = date.getFullYear()
      + '/' + (date.getMonth() + 1)
      + '/' + date.getDate()
      + ' ' + date.getHours()
      + ':' + date.getMinutes();
    return datestring;
  }

}
