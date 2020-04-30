import {Athlete} from './athlete';

export class Practice {
  constructor(
    private id?: number,
    private date?: Date,
    private local?: string,
    private comment?: string,
    private athletes?: Athlete[]
  ) {
    this.id = id ? id : 0;
    this.comment = comment ? comment : '';
    this.date = date ? date : new Date(0);
    this.local = local ? local : '';
    this.athletes = athletes ? athletes : [];
  }
}
