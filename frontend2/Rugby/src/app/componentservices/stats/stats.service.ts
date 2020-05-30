import { Injectable } from '@angular/core';
import { Stats } from '../../classes/stats';


@Injectable({
  providedIn: 'root'
})
export class StatsService {
  spectrum: string[] = ['blue', 'dodgerblue', 'turquoise', 'mediumseagreen', 'green', 'limegreen',
    'gold', 'orange', 'orangered', 'red'];

  increment(stats: Stats, propertyName: string) {
    return stats[propertyName]++;
  }

  decrement(stats: Stats, propertyName: string) {
    return stats[propertyName] > 0 ? stats[propertyName]-- : 0;
  }
/*
  hit(stats: Stats, propertyName: string) {
    return stats[propertyName].hit++;
  }

  miss(stats: Stats, propertyName: string) {
    return stats[propertyName].miss++;
  }*/

  percentage(stats: Stats, hit: string, miss: string) {
    let num = stats[hit] / ( stats[miss] + stats[hit] ) * 100;
    return isNaN(num) ? 0 : Math.round((num + Number.EPSILON) * 100) / 100;
  }

  getColorByValue(value: number) {
    return this.spectrum[value];
  }
}
