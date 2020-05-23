import {Athlete} from './athlete';

export class TrainingSchedule {
  constructor(
    public id?: number,
    public description?: string,
    public link?: string,
    public date?: Date,
    public athletes?: Athlete[]
  ) {
    this.id = id ? id : 0;
    this.description = description ? description : '';
    this.link = link ? link : '';
    this.date = date ? date : new Date(0);
    this.athletes = athletes ? athletes : [];
  }
}
