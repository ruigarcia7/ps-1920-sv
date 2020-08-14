import { Component, OnInit } from '@angular/core';
import {Game} from '../../classes/game';
import {AthleteGameStats} from '../../classes/associations/AthleteGameStats';
import {Athlete} from '../../classes/athlete';
import {Stats} from '../../classes/stats';
import {GameService} from '../../httpservices/game/game.service';
import {HttpAthleteService} from '../../httpservices/athlete/athlete.service';
import {HttpAthleteGameStatsService} from '../../httpservices/athletegamestats/athletegamestats.service';
import {AthleteGameStatsService} from '../../componentservices/athletegamestats/athletegamestats.service';
import {StatsService} from '../../componentservices/stats/stats.service';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import {DataSetInfo} from '../../interfaces/datasetinfo';
import {MenuController} from "@ionic/angular";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-stats-form',
  templateUrl: './stats-form.component.html',
  styleUrls: ['./stats-form.component.scss'],
})

export class StatsFormComponent implements OnInit {
  game: Game;
  athleteGameStats: AthleteGameStats[];
  filtered: AthleteGameStats[];
  currentStats: Stats;
  currentAthlete: Athlete;
  segment = 'form';
  chart: any;
  datasetinfo: DataSetInfo[];
  checkBoxList: any;
  hasData = false;
  all = false;

  constructor(private gameService: GameService, private athleteService: HttpAthleteService,
              private httpathletegamestatsService: HttpAthleteGameStatsService,
              private statsService: StatsService, private route: ActivatedRoute,
              private athleteGameStatsService: AthleteGameStatsService,
              private menuController: MenuController, ) { }

  ngOnInit() {
    this.athleteGameStats = [];
    this.currentStats = new Stats();
    this.currentAthlete = new Athlete();
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
    this.getAthleteGameStats(this.route.snapshot.paramMap.get('id'));
  }

  getAthleteGameStats(id: any) {
    this.httpathletegamestatsService.getAthleteGameStatsByGameId(id)
      .subscribe( ags => {
        this.filtered = ags;
        this.athleteGameStats = ags;
        this.currentStats = this.athleteGameStats[0].stats;
        this.currentAthlete = this.athleteGameStats[0].athlete;
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

  getNegativeColor(value: any) {
    return this.statsService.getColorByValue(value);
  }

  getPositiveColor(value: any) {
    return this.statsService.getColorByValue(10 - value);
  }

  getColorPercent(value: any) {
    return this.statsService.getColorByValue(10 - Math.round(value / 10));
  }

  onClick(ags: AthleteGameStats) {
    this.currentStats = ags.stats;
    this.currentAthlete = ags.athlete;
  }

  undo() {
  }

  createChart() {
    this.datasetinfo = [];
    const alabels: any[] = this.filtered.map(res => res.athlete.profile.name
      .split(' ', 1) );
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

  filterAthlete() {
    this.filtered.length > 0 ? this.filtered = this.athleteGameStatsService.pushAthletes(this.filtered, this.athleteGameStats)
      : this.filtered = this.athleteGameStats;
    debugger;
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
