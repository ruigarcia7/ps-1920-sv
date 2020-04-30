import {Profile} from './profile';
import {Practice} from './practice';
import {TrainingSchedule} from './trainingschedule';
import {Game} from './game';
import {AthleteGameStats} from './associations/AthleteGameStats';

export class Athlete {
  constructor(
    private id?: number,
    private height?: string,
    private weight?: string,
    private athleteNumber?: string,
    private comment?: string,
    private profile?: Profile,
    private practices?: Practice[],
    private trainingSchedule?: TrainingSchedule[],
    private games?: Game[],
    private athleteGameStats?: AthleteGameStats[]
  ) {
    this.id = id ? id : 0;
    this.height = height ? height : '';
    this.weight = weight ? weight : '';
    this.athleteNumber = athleteNumber ? athleteNumber : '';
    this.comment = comment ? comment : '';
    this.profile = profile ? profile : new Profile();
    this.practices = practices ? practices : [];
    this.trainingSchedule = trainingSchedule ? trainingSchedule : [];
    this.games = games ? games : [];
    this.athleteGameStats = athleteGameStats ? athleteGameStats : [];
  }
}


