export class Opponent {
  constructor(
    private id?: number,
    public name?: string,
    public photo?: string
  ) {
    this.id = id ? id : 0;
    this.name = name ? name : '';
    this.photo = photo ? photo : '';
  }
}
