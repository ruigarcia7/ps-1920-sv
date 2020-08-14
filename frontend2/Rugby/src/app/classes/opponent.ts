export class Opponent {
  constructor(
      public id?: number,
      public name?: string,
      public photo?: string,
      public file?: string
  ) {
    this.id = id ? id : 0;
    this.name = name ? name : '';
    this.photo = photo ? photo : '';
  }
}
