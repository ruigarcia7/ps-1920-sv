import {Opponent} from './opponent';
import {AthleteGameStats} from './associations/AthleteGameStats';
import {Athlete} from './athlete';
import { ActiveRoster } from './associations/ActiveRoster';

export class Game {
  constructor(
    public id?: number,
    public date?: Date,
    public local?: string,
    public comment?: string,
    public opponent?: Opponent,
    public athletes?: Athlete[],
    public activeRoster?: ActiveRoster[]
  ) {
    this.id = id ? id : 0;
    this.comment = comment ? comment : '';
    this.date = date ? date : new Date(0);
    this.local = local ? local : '';
    this.opponent = opponent ? opponent : new Opponent();
    this.athletes = athletes ? athletes : [];
    this.activeRoster = activeRoster ? activeRoster : [];
  }
}
