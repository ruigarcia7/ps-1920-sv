import { Component, OnInit } from '@angular/core';
import {Game} from '../../classes/game';
import {AthleteGameStats} from '../../classes/associations/AthleteGameStats';
import {Athlete} from '../../classes/athlete';
import {Stats} from '../../classes/stats';
import {GameService} from '../../httpservices/game/game.service';
import {AthleteService} from '../../httpservices/athlete/athlete.service';
import {HttpAthleteGameStatsService} from '../../httpservices/athletegamestats/athletegamestats.service';
import {StatsService} from '../../componentservices/stats/stats.service';

@Component({
  selector: 'app-stats-form',
  templateUrl: './stats-form.component.html',
  styleUrls: ['./stats-form.component.scss'],
})

export class StatsFormComponent implements OnInit {
  game: Game;
  athleteGameStats: AthleteGameStats[];
  currentStats: Stats;

  constructor(private gameService: GameService, private athleteService: AthleteService,
              private httpathletegamestatsService: HttpAthleteGameStatsService,
              private statsService: StatsService) { }

  ngOnInit() {
    this.athleteGameStats = [];
    this.currentStats = new Stats();
    this.getGame();
    debugger;
  }

  getGame() {
    debugger;
    this.gameService.getGameById(3000)
      .subscribe( game => {
        debugger;
        this.game = game;
        this.athleteGameStats = this.game.athleteGameStats;
        this.currentStats = this.game.athleteGameStats[0].stats;
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
    this.currentStats = ags.stats;
  }
}
