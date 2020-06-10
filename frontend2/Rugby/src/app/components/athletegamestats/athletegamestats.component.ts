import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AthleteGameStats} from '../../classes/associations/AthleteGameStats';
import {Stats} from '../../classes/stats';
import {HttpAthleteGameStatsService} from '../../httpservices/athletegamestats/athletegamestats.service';
import {StatsService} from '../../componentservices/stats/stats.service';
import {ActivatedRoute} from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MenuController} from '@ionic/angular';
import { LoadingService } from '../../componentservices/loading/loading.service';
import {AthleteGameStatsService} from '../../componentservices/athletegamestats/athletegamestats.service';
import { Chart } from 'chart.js';
import {DataSetInfo} from '../../interfaces/datasetinfo';

@Component({
  selector: 'app-athletegamestats',
  templateUrl: './athletegamestats.component.html',
  styleUrls: ['./athletegamestats.component.scss'],
})
export class AthleteGameStatsComponent implements OnInit {
  segment = 'stats';
  athleteGameStats: AthleteGameStats[];
  total: Stats;
  displayedColumns: string[] =
    ['game', 'errors', 'fouls', 'redCards', 'yellowCards', 'turnOvers', 'tries', 'mauls', 'playingTime',
    'tacklesHit', 'tacklesMiss', 'tacklesPercentage', 'conversionkicksHit', 'conversionkicksMiss',
    'conversionkicksPercentage', 'goalkicksHit', 'goalkicksMiss', 'goalkicksPercentage', 'dropkicksHit',
    'dropkicksMiss', 'dropkicksPercentage', 'lineoutsHit', 'lineoutsMiss', 'lineoutsPercentage',
    'offsidekicksHit', 'offsidekicksMiss', 'offsidekicksPercentage'];
  dataSource: any;
  hasData = false;
  chart: any;
  datasetinfo: DataSetInfo[];

  constructor(private httpathletegamestatsService: HttpAthleteGameStatsService,
              private statsService: StatsService, private route: ActivatedRoute,
              private menuController: MenuController, private athleteGameStatsService: AthleteGameStatsService,
              private loadingService: LoadingService) {
  }

  ngOnInit() {
    this.athleteGameStats = [];
    this.datasetinfo = [];
    //this.loadingService.present('Please Wait...');
    this.getAthleteGameStats(this.route.snapshot.paramMap.get('id'));
  }

  getAthleteGameStats(id: any) {
    this.httpathletegamestatsService.getAthleteGameStatsByAthleteId(id)
      .subscribe(ags => {
        debugger;
        this.athleteGameStats = ags;
        this.dataSource = new MatTableDataSource(this.athleteGameStats);
        this.total = this.athleteGameStatsService.getTotal(ags);
        //this.loadingService.dismiss();
        this.createChart();
        this.hasData = true;
      });
  }

  ionViewDidEnter() {
    this.menuController.enable(false, 'main-menu');
  }

  ionViewDidLeave() {
    this.menuController.enable(true, 'main-menu');
  }

  async openSubMenu() {
    this.menuController.enable(true, 'subtitle');
    await this.menuController.open('subtitle');
  }

  async closeSubMenu() {
    await this.menuController.close('subtitle');
  }

  createChart() {
    let alabels: any[] = this.athleteGameStats.map(res => res.game.opponent.name + ' ' +
      this.athleteGameStatsService.formatDate(new Date(res.game.date)) );
    debugger;
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: alabels,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true
        },
        scales: {
          xAxes: [{display: true}], yAxes: [{display: true}]
        }
      }
    });
  }

  pushTest(e, property) {
    debugger;
    let newState = !e.currentTarget.checked;
    if ( newState) {
      let newData = {
        name: property,
        data: this.athleteGameStats.map(res => res.stats[property]),
        borderColor: this.athleteGameStatsService.getColor(this.datasetinfo.length)
      };
      this.datasetinfo.push(newData);
      this.chart.data.datasets.push({
        data: newData.data,
        fill: false,
        borderColor: newData.borderColor,
        label: newData.name
      });
      this.chart.update();
    } else {
      let oldData = this.datasetinfo.filter( value => value.name === property) as any;
      let index = this.datasetinfo.map( data => data.name ).indexOf(property);
      if (index >= 0) {
        this.chart.data.datasets.splice(index, 1);
        this.datasetinfo.splice(index,1);
        this.chart.update();
      }
    }
  }
}
