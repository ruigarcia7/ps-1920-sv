export class Profile {
  constructor(
    private id?: number,
    private name?: string,
    private birth?: Date,
    private address?: string,
    private mail?: string,
    private phone?: string,
    private photo?: string
  ) {
    this.id = id ? id : 0;
    this.name = name ? name : '';
    this.birth = birth ? birth : new Date(0);
    this.address = address ? address : '';
    this.mail = mail ? mail : '';
    this.phone = phone ? phone : '';
    this.photo = photo ? photo : '';
  }
}
