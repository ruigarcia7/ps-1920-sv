export class StaffType {
  constructor(
    private id?: number,
    public name?: string,
  ) {
    this.id = id ? id : 0;
    this.name = name ? name : '';
  }
}
