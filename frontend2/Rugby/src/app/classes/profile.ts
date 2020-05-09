import {Event} from './event';

export class Profile {
  constructor(
    public id?: number,
    public name?: string,
    public birth?: Date,
    public address?: string,
    public mail?: string,
    public phone?: string,
    public photo?: string,
    public events?: Event[]
  ) {
    this.id = id ? id : 0;
    this.name = name ? name : '';
    this.birth = birth ? birth : new Date(0);
    this.address = address ? address : '';
    this.mail = mail ? mail : '';
    this.phone = phone ? phone : '';
    this.photo = photo ? photo : '';
    this.events = events ? events : [];
  }
}
