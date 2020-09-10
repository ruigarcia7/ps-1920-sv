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

  percentage(stats: Stats, hit: string, miss: string) {
    let num = stats[hit] / ( stats[miss] + stats[hit] ) * 100;
    return isNaN(num) ? 0 : Math.round((num + Number.EPSILON) * 100) / 100;
  }

  getColorByValue(value: number) {
    return this.spectrum[value];
  }

  hasCard(yellowCards: any, redCards: any, id: number) {
    return this.hasYellow(yellowCards, id) || this.hasRed(redCards, id);
  }

  hasYellow(yellowCards: any, id: number) {
    return yellowCards.filter( yc => yc.athlete.id === id).length === 1;
  }

  hasRed(redCards: any, id: number) {
    return redCards.filter( yc => yc.athlete.id === id).length === 1;
  }

  getYellow(yellowCards: any, id: number) {
    return yellowCards.filter( yc => yc.athlete.id === id)[0];
  }

  getYellowTime(yellowCards: any, id: number) {
    const card = yellowCards.filter( yc => yc.athlete.id === id)[0];
    return card ? card.time : 0;
  }

  removeYellowCard(yellowCards: any, id: number) {
    return yellowCards.filter( yc => yc.athlete.id !== id);
  }

  getRed(redCards: any, id: number) {
    return redCards.filter ( rc => rc.athlete.id === id)[0];
  }

  getRedTime(redCards: any, id: number) {
    const card = redCards.filter( rc => rc.athlete.id === id)[0];
    return card ? card.time : 0;
  }

  removeRedCard(redCards: any, id: number) {
    return redCards.filter( rc => rc.athlete.id !== id);
  }
}
