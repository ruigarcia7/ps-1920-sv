import {Game} from '../classes/game';

export class Tournament {
  constructor(
    private id?: number,
    public name?: string,
    public date?: Date,
    public classification?: string,
    public comment?: string,
    public games?: Game[]
  ) {
    this.id = id ? id : 0;
    this.name = name ? name : '';
    this.date = date ? date : new Date(0);
    this.comment = comment ? comment : '';
    this.classification = classification ? classification : '';
    this.games = games ? games : [];
  }
}
