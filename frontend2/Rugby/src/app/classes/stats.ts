export class Stats {
  constructor(
    private id?: number,
    public errors?: number,
    public fouls?: number,
    public turnOvers?: number,
    public yellowCards?: number,
    public redCards?: number,
    public tries?: number,
    public mauls?: number,
    public playingTime?: number,
    public tacklesHit?: number,
    public tacklesMiss?: number,
    public melleesHit?: number,
    public melleesMiss?: number,
    public conversionkicksHit?: number,
    public conversionkicksMiss?: number,
    public goalkicksHit?: number,
    public goalkicksMiss?: number,
    public dropkicksHit?: number,
    public dropkicksMiss?: number,
    public offsidekicksHit?: number,
    public offsidekicksMiss?: number,
    public lineoutsHit?: number,
    public lineoutsMiss?: number
  ) {
    this.id = id ? id : 0;
    this.errors = errors ? errors : 0;
    this.fouls = fouls ? fouls : 0;
    this.turnOvers = turnOvers ? turnOvers : 0;
    this.yellowCards = yellowCards ? yellowCards : 0;
    this.redCards = redCards ? redCards : 0;
    this.tries = tries ? tries : 0;
    this.mauls = mauls ? mauls : 0;
    this.playingTime = playingTime ? playingTime : 0;
    this.tacklesHit = tacklesHit ? tacklesHit : 0;
    this.tacklesMiss = tacklesMiss ? tacklesMiss : 0;
    this.melleesHit = melleesHit ? melleesHit : 0;
    this.melleesMiss = melleesMiss ? melleesMiss : 0;
    this.conversionkicksHit = conversionkicksHit ? conversionkicksHit : 0;
    this.conversionkicksMiss = conversionkicksMiss ? conversionkicksMiss : 0;
    this.goalkicksHit = goalkicksHit ? goalkicksHit : 0;
    this.goalkicksMiss = goalkicksMiss ? goalkicksMiss : 0;
    this.dropkicksHit = dropkicksHit ? dropkicksHit : 0;
    this.dropkicksMiss = dropkicksMiss ? dropkicksMiss : 0;
    this.offsidekicksHit = offsidekicksHit ? offsidekicksHit : 0;
    this.offsidekicksMiss = offsidekicksMiss ? offsidekicksMiss : 0;
    this.lineoutsHit = lineoutsHit ? lineoutsHit : 0;
    this.lineoutsMiss = lineoutsMiss ? lineoutsMiss : 0;
  }
}
