export class Position {
  constructor(
    public id?: number,
    public name?: string,
  ) {
    this.id = id ? id : 0;
    this.name = name ? name : '';
  }
}
