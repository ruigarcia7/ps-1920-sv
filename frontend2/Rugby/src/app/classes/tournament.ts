export class Tournament {
  constructor(
    private id?: number,
    private classification?: string,
    private comment?: string
  ) {
    this.id = id ? id : 0;
    this.comment = comment ? comment : '';
    this.classification = classification ? classification : '';
  }
}
