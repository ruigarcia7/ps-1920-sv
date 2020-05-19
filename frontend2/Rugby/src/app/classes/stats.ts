import {Mellee} from './stats/mellee';
import {Tackle} from './stats/tackle';
import {ConversionKick} from './stats/conversionkick';
import {GoalKick} from './stats/goalkick';
import {DropKick} from './stats/dropkick';
import {OffSideKick} from './stats/offsidekick';
import {LineOut} from './stats/lineout';

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
    public tackles?: Tackle,
    public mellees?: Mellee,
    public conversionkicks?: ConversionKick,
    public goalkicks?: GoalKick,
    public dropkicks?: DropKick,
    public offsidekicks?: OffSideKick,
    public lineouts?: LineOut
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
    this.tackles = tackles ? tackles : new Tackle();
    this.mellees = mellees ? mellees : new Mellee();
    this.conversionkicks = conversionkicks ? conversionkicks : new ConversionKick();
    this.goalkicks = goalkicks ? goalkicks : new GoalKick();
    this.dropkicks = dropkicks ? dropkicks : new DropKick();
    this.offsidekicks = offsidekicks ? offsidekicks : new OffSideKick();
    this.lineouts = lineouts ? lineouts : new LineOut();
  }
}
