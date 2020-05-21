import {Game} from '../game';
import {Athlete} from '../athlete';

export class ActiveRoster {
  constructor(
    private id: number,
    public athlete?: Athlete,
    public gameId?: number,
    public number?: number
  ) {
    this.id = id ? id : 0;
    this.athlete = athlete ? athlete : new Athlete();
    this.number = number ? number : 0;
  }
}
