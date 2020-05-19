import { Component, OnInit } from '@angular/core';
import { AthleteGameStats } from '../../classes/associations/AthleteGameStats';
import { HttpAthleteGameStatsService } from '../../httpservices/athletegamestats/athletegamestats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  athleteGameStats: AthleteGameStats[];

  constructor(private athleteGameStatsService: HttpAthleteGameStatsService) {
  }

  ngOnInit() {this.showStats();}

  showStats() {
    this.athleteGameStatsService.getAthleteGameStats()
      .subscribe(stats => {
        this.athleteGameStats = stats;
        console.log('athletes found ' + stats);
      });
  }
}
