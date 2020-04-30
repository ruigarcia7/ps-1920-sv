export class StaffType {
  constructor(
    private id?: number,
    private name?: string,
  ) {
    this.id = id ? id : 0;
    this.name = name ? name : '';
  }
}
