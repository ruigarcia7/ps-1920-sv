import { Component, OnInit } from '@angular/core';
import {Game} from '../../classes/game';
import {AthleteGameStats} from '../../classes/associations/AthleteGameStats';
import {Athlete} from '../../classes/athlete';
import {Stats} from '../../classes/stats';
import {GameService} from '../../httpservices/game/game.service';
import {AthleteService} from '../../httpservices/athlete/athlete.service';
import {HttpAthleteGameStatsService} from '../../httpservices/athletegamestats/athletegamestats.service';
import {StatsService} from '../../componentservices/stats/stats.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stats-form',
  templateUrl: './stats-form.component.html',
  styleUrls: ['./stats-form.component.scss'],
})

export class StatsFormComponent implements OnInit {
  game: Game;
  athleteGameStats: AthleteGameStats[];
  currentStats: Stats;
  currentAthlete: Athlete;

  constructor(private gameService: GameService, private athleteService: AthleteService,
              private httpathletegamestatsService: HttpAthleteGameStatsService,
              private statsService: StatsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.athleteGameStats = [];
    this.currentStats = new Stats();
    this.currentAthlete = new Athlete();
    this.getAthleteGameStats(this.route.snapshot.paramMap.get('id'));
  }

  getAthleteGameStats(id: any) {
    this.httpathletegamestatsService.getAthleteGameStatsByGameId(id)
      .subscribe( ags => {
        this.athleteGameStats = ags;
        this.currentStats = this.athleteGameStats[0].stats;
        this.currentAthlete = this.athleteGameStats[0].athlete;
      });
  }

  getNegativeColor(value: any) {
    if (value < 3) return 'green';
    if (value < 10) return 'orange';
    return 'red';
}

  getPositiveColor(value: any) {
    if (value < 3) return 'red';
    if (value < 10) return 'orange';
    return 'green';
  }

  getColorPercent(value: any) {
    if (value < 25) return 'red';
    if (value < 50) return 'orange';
    if (value < 75) return 'green';
    return 'blue';
  }

  onClick(ags: AthleteGameStats) {
    debugger;
    this.currentStats = ags.stats;
    this.currentAthlete = ags.athlete;
  }
}
