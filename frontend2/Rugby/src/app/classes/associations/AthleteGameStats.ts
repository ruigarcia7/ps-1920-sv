import {Game} from '../game';
import {Stats} from '../stats';
import {Athlete} from '../athlete';

export class AthleteGameStats {
  constructor(
    private id?: number,
    private athlete?: Athlete,
    private stats?: Stats,
    private game?: Game
  ) {
    this.id = id ? id : 0;
    this.athlete = athlete ? athlete : new Athlete();
    this.stats = stats ? stats : new Stats();
    this.game = game ? game : new Game();
  }
}
