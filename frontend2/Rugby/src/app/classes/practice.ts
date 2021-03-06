import {AthletePractice} from './associations/AthletePractice';

export class Practice {
  constructor(
      public id?: number,
      public date?: Date,
      public local?: string,
      public comment?: string,
      public athletePractices?: AthletePractice[]
  ) {
    this.id = id ? id : 0;
    this.comment = comment ? comment : '';
    this.date = date ? date : new Date(0);
    this.local = local ? local : '';
    this.athletePractices = athletePractices ? athletePractices : [];
  }
}
