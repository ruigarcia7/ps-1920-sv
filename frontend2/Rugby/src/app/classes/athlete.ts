import {Profile} from './profile';
import {Practice} from './practice';
import {TrainingSchedule} from './trainingschedule';
import {Game} from './game';
import {AthleteGameStats} from './associations/AthleteGameStats';

export class Athlete {
  constructor(
    public id?: number,
    public height?: string,
    public weight?: string,
    public athleteNumber?: string,
    public positions?: string,
    public comment?: string,
    public profile?: Profile,
    public practices?: Practice[],
    public trainingSchedule?: TrainingSchedule[],
    public games?: Game[],
    public athleteGameStats?: AthleteGameStats[]
  ) {
    this.id = id ? id : 0;
    this.height = height ? height : '';
    this.weight = weight ? weight : '';
    this.athleteNumber = athleteNumber ? athleteNumber : '';
    this.comment = comment ? comment : '';
    this.positions = positions ? positions : '';
    this.profile = profile ? profile : new Profile();
    this.practices = practices ? practices : [];
    this.trainingSchedule = trainingSchedule ? trainingSchedule : [];
    this.games = games ? games : [];
    this.athleteGameStats = athleteGameStats ? athleteGameStats : [];
  }
}


