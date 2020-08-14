import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
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
  filtered: AthleteGameStats[];
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
  checkBoxList: any;
  all = false;

  constructor(private httpathletegamestatsService: HttpAthleteGameStatsService,
              private statsService: StatsService, private route: ActivatedRoute,
              private menuController: MenuController, private athleteGameStatsService: AthleteGameStatsService,
              private loadingService: LoadingService) {
  }

  ngOnInit() {
    this.athleteGameStats = [];
    this.datasetinfo = [];
    this.checkBoxList = [
      { name: 'Fouls', isChecked: false, property: 'fouls'},
      { name: 'Errors', isChecked: false, property: 'errors'},
      { name: 'Yellow Cards', isChecked: false, property: 'yellowCards'},
      { name: 'Red Cards', isChecked: false, property: 'redCards'},
      { name: 'Turn Overs', isChecked: false, property: 'turnOvers'},
      { name: 'Tries', isChecked: false, property: 'tries'},
      { name: 'Mauls', isChecked: false, property: 'mauls'},
      { name: 'Tackles H', isChecked: false, property: 'tacklesHit'},
      { name: 'Tackles M', isChecked: false, property: 'tacklesMiss'},
      { name: 'Conversion Kicks H', isChecked: false, property: 'conversionkicksHit'},
      { name: 'Conversion Kicks M', isChecked: false, property: 'conversionkicksMiss'},
      { name: 'Goal Kicks H', isChecked: false, property: 'goalkicksHit'},
      { name: 'Goal Kicks M', isChecked: false, property: 'goalkicksMiss'},
      { name: 'Drop Kicks H', isChecked: false, property: 'dropkicksHit'},
      { name: 'Drop Kicks M', isChecked: false, property: 'dropkicksMiss'},
      { name: 'Line Outs H', isChecked: false, property: 'lineoutsHit'},
      { name: 'Line Outs M', isChecked: false, property: 'lineoutsMiss'},
      { name: 'Offside Kicks H', isChecked: false, property: 'offsidekicksHit'},
      { name: 'Offside Kicks M', isChecked: false, property: 'offsidekicksMiss'},
    ];
    //this.loadingService.present('Please Wait...');
    this.getAthleteGameStats(this.route.snapshot.paramMap.get('id'));
  }

  getAthleteGameStats(id: any) {
    this.httpathletegamestatsService.getAthleteGameStatsByAthleteId(id)
      .subscribe(ags => {
        debugger;
        this.filtered = ags;
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

  async openFilterMenu() {
    this.menuController.enable(true, 'filter');
    await this.menuController.open('filter');
  }

  async closeFilterMenu() {
    await this.menuController.close('filter');
  }

  createChart() {
    this.datasetinfo = [];
    let alabels: any[] = this.filtered.map(res => res.game.opponent.name + ' ' +
      this.athleteGameStatsService.formatDate(new Date(res.game.date)) );
    debugger;
    this.chart = new Chart('canvas', {
      type: this.filtered.length > 1 ? 'line' : 'bar',
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
          xAxes: [{display: true}], yAxes: [{display: true, ticks: {suggestedMin: 0}}]
        }
      }
    });
    this.chart.update();
  }

  pushTest(e, property) {
    debugger;
    let newState = e.currentTarget.checked;
    if ( newState) {
      let newData = {
        name: property,
        data: this.filtered.map(res => res.stats[property]),
        borderColor: this.athleteGameStatsService.getColor(this.datasetinfo.length)
      };
      this.datasetinfo.push(newData);
      this.filtered.length > 1
        ?
        this.chart.data.datasets.push({
          data: newData.data,
          fill: false,
          borderColor: newData.borderColor,
          label: newData.name
          })
        :
        this.chart.data.datasets.push({
        data: newData.data,
        fill: false,
        backgroundColor: newData.borderColor,
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

  filterGame() {
    this.filtered.length > 0 ? this.filtered = this.athleteGameStatsService.pushGames(this.filtered, this.athleteGameStats)
    : this.filtered = this.athleteGameStats;
    debugger;
    this.dataSource = new MatTableDataSource(this.filtered);
    this.total = this.athleteGameStatsService.getTotal(this.filtered);
    this.closeFilterMenu();
    this.uncheckAll();
    this.all = false;
    this.chart.destroy();
    this.createChart();
  }

  onAll(e) {
    let newState = !e.currentTarget.checked;
    newState ? this.checkAll() : this.uncheckAll();
  }

  checkAll() {
    this.checkBoxList.forEach(cb => cb.isChecked = true);
  }

  uncheckAll() {
    this.checkBoxList.forEach(cb => cb.isChecked = false);
  }
}
