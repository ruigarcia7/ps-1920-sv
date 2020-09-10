
export class Injury {
constructor(
  public id?: number,
  public name?: string,
  public zone?: string
) {
  this.id = id ? id : 0;
  this.name = name ? name : '';
  this.zone = zone ? zone : '';
}
}
