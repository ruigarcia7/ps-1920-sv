import { Component, OnInit } from '@angular/core';
import { Stats } from '../../classes/stats';
import { StatsService } from '../../httpservices/stats/stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  stats: Stats[];

  constructor(private statsService: StatsService) {
  }

  ngOnInit() {this.showStats();}

  showStats() {
    this.statsService.getStats()
      .subscribe(stats => {
        this.stats = stats;
        console.log('athletes found ' + stats);
      });
  }
}
