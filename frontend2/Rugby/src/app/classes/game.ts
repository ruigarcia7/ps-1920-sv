import {Opponent} from './opponent';
import {AthleteGameStats} from './associations/AthleteGameStats';
import {Athlete} from './athlete';

export class Game {
  constructor(
    private id?: number,
    private date?: Date,
    private local?: string,
    private comment?: string,
    private opponent?: Opponent,
    private athletes?: Athlete[],
    private athleteGameStats?: AthleteGameStats[]
  ) {
    this.id = id ? id : 0;
    this.comment = comment ? comment : '';
    this.date = date ? date : new Date(0);
    this.local = local ? local : '';
    this.opponent = opponent ? opponent : new Opponent();
    this.athletes = athletes ? athletes : [];
    this.athleteGameStats = athleteGameStats ? athleteGameStats : [];
  }
}
