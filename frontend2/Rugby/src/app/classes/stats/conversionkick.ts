export class ConversionKick {
  constructor(
    private id?: number,
    private hit?: number,
    private miss?: number
  ) {
    this.id = id ? id : 0;
    this.hit = hit ? hit : 0;
    this.miss = miss ? miss : 0;
  }
}
