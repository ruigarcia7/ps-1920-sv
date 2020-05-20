import { Injectable } from '@angular/core';
import { Stats } from '../../classes/stats';


@Injectable({
  providedIn: 'root'
})
export class StatsService {

  increment(stats: Stats, propertyName: string) {
    return stats[propertyName]++;
  }
/*
  hit(stats: Stats, propertyName: string) {
    return stats[propertyName].hit++;
  }

  miss(stats: Stats, propertyName: string) {
    return stats[propertyName].miss++;
  }*/

  percentage(stats: Stats, hit: string, miss: string) {
    debugger;
    let num = stats[hit] / ( stats[miss] + stats[hit] ) * 100;
    return isNaN(num) ? 0 : Math.round((num + Number.EPSILON) * 100) / 100;
  }
}
