import {Athlete} from './athlete';

export class TrainingSchedule {
  constructor(
    private id?: number,
    private description?: string,
    private link?: string,
    private day?: Date,
    private athletes?: Athlete[]
  ) {
    this.id = id ? id : 0;
    this.description = description ? description : '';
    this.link = link ? link : '';
    this.day = day ? day : new Date(0);
    this.athletes = athletes ? athletes : [];
  }
}
