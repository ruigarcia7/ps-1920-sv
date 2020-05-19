import { Injectable } from '@angular/core';
import { Stats } from '../../classes/stats';


@Injectable({
  providedIn: 'root'
})
export class StatsService {

  increment(stats: Stats, propertyName: string) {
    return stats[propertyName]++;
  }

  hit(stats: Stats, propertyName: string) {
    return stats[propertyName].hit++;
  }

  miss(stats: Stats, propertyName: string) {
    return stats[propertyName].miss++;
  }

  percentage(stats: Stats, propertyName: string) {
    let num = stats[propertyName].hit / ( stats[propertyName].hit + stats[propertyName].miss ) * 100;
    return isNaN(num) ? 0 : num;
  }
}
