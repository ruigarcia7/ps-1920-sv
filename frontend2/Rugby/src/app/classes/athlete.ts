export class Athlete {
  constructor(
    private id?: number,
    private height?: string,
    private weight?: string,
    private athleteNumber?: string,
    private comment?: string
  ) {
    this.id = id ? id : 0;
    this.height = height ? height : '';
    this.weight = weight ? weight : '';
    this.athleteNumber = athleteNumber ? athleteNumber : '';
    this.comment = comment ? comment : '';
  }
}


