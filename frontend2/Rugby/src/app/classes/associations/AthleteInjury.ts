import {Opponent} from '../opponent';
import {Athlete} from '../athlete';
import { Injury } from '../injury';

export class AthleteInjury {
  constructor(
    public id?: number,
    public severity?: string,
    public state?: string,
    public beginDate?: Date,
    public returnDate?: Date,
    public recommendations?: string,
    public athlete?: Athlete,
    public injury?: Injury
  ) {
    this.id = id ? id : 0;
    this.severity = severity ? severity : '';
    this.state = state ? state : '';
    this.beginDate = beginDate ? beginDate : new Date(0);
    this.returnDate = returnDate ? returnDate : new Date(0);
    this.recommendations = recommendations ? recommendations : '';
    this.athlete = athlete ? athlete : new Athlete();
    this.injury = injury ? injury : new Injury();
  }
}
