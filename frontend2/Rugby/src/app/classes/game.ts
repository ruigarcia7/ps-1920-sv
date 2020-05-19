import {Opponent} from './opponent';
import {AthleteGameStats} from './associations/AthleteGameStats';
import {Athlete} from './athlete';

export class Game {
  constructor(
    private id?: number,
    public name?: string,
    public date?: Date,
    public local?: string,
    public comment?: string,
    public opponent?: Opponent,
    private athletes?: Athlete[],
    public athleteGameStats?: AthleteGameStats[]
  ) {
    this.id = id ? id : 0;
    this.name = name ? name : '';
    this.comment = comment ? comment : '';
    this.date = date ? date : new Date(0);
    this.local = local ? local : '';
    this.opponent = opponent ? opponent : new Opponent();
    this.athletes = athletes ? athletes : [];
    this.athleteGameStats = athleteGameStats ? athleteGameStats : [];
  }
}
