import {Component, OnInit, ViewChild} from '@angular/core';
import {Game} from '../../classes/game';
import {AthleteGameStats} from '../../classes/associations/AthleteGameStats';
import {Athlete} from '../../classes/athlete';
import {Stats} from '../../classes/stats';
import {GameService} from '../../httpservices/game/game.service';
import {HttpAthleteGameStatsService} from '../../httpservices/athletegamestats/athletegamestats.service';
import {AthleteGameStatsService} from '../../componentservices/athletegamestats/athletegamestats.service';
import {StatsService} from '../../componentservices/stats/stats.service';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import {DataSetInfo} from '../../interfaces/datasetinfo';
import {YellowCard} from '../../interfaces/yellowcard';
import {RedCard} from '../../interfaces/redcard';
import {MenuController, PickerController} from '@ionic/angular';
import {MatTableDataSource} from '@angular/material/table';
import {ActiveRoster} from '../../classes/associations/ActiveRoster';
import {TimerComponent} from '../timer/timer.component';
import {forEach} from "@angular-devkit/schematics";

@Component({
  selector: 'app-stats-form',
  templateUrl: './stats-form.component.html',
  styleUrls: ['./stats-form.component.scss'],
})

export class StatsFormComponent implements OnInit/*, AfterViewInit*/ {
  /*@ViewChildren(TimerComponent) ql: QueryList<TimerComponent>;
  public ql: QueryList<TimerComponent>;
  private timer: TimerComponent;*/
  @ViewChild(TimerComponent) timer;

  game: Game;
  positions: Position[];
  athleteGameStats: AthleteGameStats[];
  filtered: AthleteGameStats[];
  currentStats: Stats;
  currentAthlete: Athlete;
  activeRoster: ActiveRoster[];
  segment = 'form';
  chart: any;
  datasetinfo: DataSetInfo[];
  checkBoxList: any;
  hasData = false;
  all = false;
  disabledPreview = true;
  yellowCards: any;
  redCards: any;
  selectedHasCard = false;
  currentTimerMinutes = 0;

  constructor(private gameService: GameService,
              private httpathletegamestatsService: HttpAthleteGameStatsService,
              private statsService: StatsService, private route: ActivatedRoute,
              private athleteGameStatsService: AthleteGameStatsService,
              private menuController: MenuController, private pickerController: PickerController) { }

  ngOnInit() {
    this.athleteGameStats = [];
    this.currentStats = new Stats();
    this.currentAthlete = new Athlete();
    this.yellowCards = [];
    this.redCards = [];
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
      .subscribe( gsr => {
        debugger;
        this.game = gsr.game;
        this.athleteGameStats = gsr.ags;
        this.activeRoster = gsr.game.activeRoster;
        this.positions = gsr.positions;
        this.generateStats();
        this.createChart();
        this.hasData = true;
        this.startTimerFetch();
      });
  }

  ionViewDidEnter() {
    this.menuController.enable(false, 'main-menu');
  }

  ionViewDidLeave() {
    this.menuController.enable(true, 'main-menu');
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

  getCardColor(value: any) {
    if (this.statsService.hasYellow(this.yellowCards, value)) return 'gold';
    return this.statsService.hasRed(this.redCards, value) ? 'red' : 'black';
  }

  removeRedCard(id: any) {
    this.redCards = this.statsService.removeRedCard(this.redCards, id);
  }

  removeYellowCard(id: any) {
    this.yellowCards = this.statsService.removeYellowCard(this.yellowCards, id);
  }

  onClick(ags: AthleteGameStats) {
    debugger;
    this.currentStats = ags.stats;
    this.currentAthlete = ags.athlete;
    this.selectedHasCard = this.statsService.hasCard(this.yellowCards, this.redCards, this.currentAthlete.id);
  }

  generateStats() {
    debugger;
    this.athleteGameStats = this.athleteGameStatsService.generateStats(this.athleteGameStats, this.game);
    this.filtered = this.athleteGameStats;
    if (this.athleteGameStats.length > 0) {
      this.currentStats = this.athleteGameStats[0].stats;
      this.currentAthlete = this.athleteGameStats[0].athlete;
      this.disabledPreview = false;
    }
  }

  incrementYellow() {
    this.statsService.increment(this.currentStats, 'yellowCards');
    debugger;
    const newCard = {
      athlete: this.currentAthlete,
      time: this.timer.getTimerTime(),
    };
    this.yellowCards.push(newCard);
    this.selectedHasCard = true;
  }

  incrementRed() {
    this.statsService.increment(this.currentStats, 'redCards');
    const newCard = {
      athlete: this.currentAthlete,
      time: this.timer.getTimerTime(),
    };
    this.redCards.push(newCard);
    this.selectedHasCard = true;
  }

  startTimerFetch() {
    setInterval( () => {
      this.processTimer();
    }, 30000);
  }

  processTimer() {
    debugger;
    const currMinutes = this.timer.getTimerMinutes();
    if (currMinutes === 0) {
      this.currentTimerMinutes = 0;
      return;
    }
    if ( currMinutes > this.currentTimerMinutes ) {
      this.activeRoster.forEach(item => {
        this.statsService.increment(
          this.athleteGameStatsService.getAthleteStats(item.athlete, this.athleteGameStats).stats,
          'playingTime');
      });
      this.currentTimerMinutes = currMinutes;
    }
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
    const newState = e.currentTarget.checked;
    if ( newState) {
      const newData = {
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
      const oldData = this.datasetinfo.filter( value => value.name === property) as any;
      const index = this.datasetinfo.map( data => data.name ).indexOf(property);
      if (index >= 0) {
        this.chart.data.datasets.splice(index, 1);
        this.datasetinfo.splice(index, 1);
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
    const newState = !e.currentTarget.checked;
    newState ? this.checkAll() : this.uncheckAll();
  }

  checkAll() {
    this.checkBoxList.forEach(cb => cb.isChecked = true);
  }

  uncheckAll() {
    this.checkBoxList.forEach(cb => cb.isChecked = false);
  }

  async openPicker() {
    debugger;
    const picker = await this.pickerController.create({
      columns : this.getColumns(),
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler : (value) => {
            this.swapPlayer(this.currentAthlete, value);
          }
        }
      ]
    });
    await picker.present();
  }

  getColumns() {
    let columns = [];
    columns.push({
      name: 'column',
      options: this.getOptions()
    });
    return columns;
  }

  getOptions() {
    let options = [];
    this.game.athletes.forEach( athlete => {
      options.push({
        text: athlete.profile.name,
        value: athlete
      });
    });
    return options;
  }

  swapPlayer(current: any, value: any) {
    debugger;
    this.activeRoster.forEach(athlete => {
      if (athlete.athlete.id === current.id) {
        athlete.athlete = value.column.value;
        this.onClick(this.athleteGameStatsService.getAthleteStats(athlete.athlete, this.athleteGameStats));
      }
    });
  }
}
