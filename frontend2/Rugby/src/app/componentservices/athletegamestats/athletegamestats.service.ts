import { Injectable } from '@angular/core';
import {AthleteGameStats} from "../../classes/associations/AthleteGameStats";
import {Stats} from "../../classes/stats";

@Injectable({
  providedIn: 'root'
})
export class AthleteGameStatsService {

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
}
