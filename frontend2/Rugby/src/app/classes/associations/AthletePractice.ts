import {Practice} from '../practice';
import {Athlete} from '../athlete';

export class AthletePractice {
  constructor(
    private id?: number,
    private athlete?: Athlete,
    private practice?: Practice,
    private physio?: boolean,
    private regular?: boolean
  ) {
    this.id = id ? id : 0;
    this.athlete = athlete ? athlete : new Athlete();
    this.practice = practice ? practice : new Practice();
    this.physio = physio ? physio : false;
    this.regular = regular ? regular : false;
  }
}
