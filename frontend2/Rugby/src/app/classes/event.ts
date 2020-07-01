import {Profile} from './profile';

export class Event {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public date?: Date,
    public local?: string,
    public profiles?: any
  ) {
    this.id = id ? id : 0;
    this.description = description ? description : '';
    this.date = date ? date : new Date(0);
    this.local = local ? local : '';
    this.name = name ? name : '';
    this.profiles = profiles ? profiles : [];
  }
}
