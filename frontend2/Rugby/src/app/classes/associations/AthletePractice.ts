import {Practice} from '../practice';
import {Athlete} from '../athlete';

export class AthletePractice {
  constructor(
    private id?: number,
    public athlete?: Athlete,
    public physio?: boolean,
    public regular?: boolean
  ) {
    this.id = id ? id : 0;
    this.athlete = athlete ? athlete : new Athlete();
    this.physio = physio ? physio : false;
    this.regular = regular ? regular : false;
  }
}
