import {Game} from '../game';
import {Stats} from '../stats';
import {Athlete} from '../athlete';

export class AthleteGameStats {
  constructor(
    public id?: number,
    public athlete?: Athlete,
    public stats?: Stats,
    public game?: Game
  ) {
    this.id = id ? id : 0;
    this.athlete = athlete ? athlete : new Athlete();
    this.stats = stats ? stats : new Stats();
    this.game = game ? game : new Game();
  }
}
