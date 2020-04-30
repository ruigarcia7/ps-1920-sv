export class Opponent {
  constructor(
    private id?: number,
    private name?: string,
    private photo?: string
  ) {
    this.id = id ? id : 0;
    this.name = name ? name : '';
    this.photo = photo ? photo : '';
  }
}
