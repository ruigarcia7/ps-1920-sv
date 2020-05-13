import {Profile} from './profile';

export class Event {
  constructor(
    private id?: number,
    private name?: string,
    private description?: string,
    private date?: Date,
    private local?: string,
    public profiles?: Profile[]
  ) {
    this.id = id ? id : 0;
    this.description = description ? description : '';
    this.date = date ? date : new Date(0);
    this.local = local ? local : '';
    this.name = name ? name : '';
    this.profiles = profiles ? profiles : [];
  }
}
