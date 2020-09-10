import { Component, OnInit } from '@angular/core';
import {AthleteService} from '../../componentservices/athlete/athlete.service';
import {HttpEnumService} from '../../httpservices/enum/enum.service';
import {GameService} from '../../httpservices/game/game.service';
import {ActiveRoster} from '../../classes/associations/ActiveRoster';
import {Position} from '../../classes/position';
import {Game} from '../../classes/game';
import {Athlete} from '../../classes/athlete';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from "@ionic/angular";
import {RosterService} from "../../componentservices/roster/roster.service";

@Component({
  selector: 'app-game-roster',
  templateUrl: './game-roster.component.html',
  styleUrls: ['./game-roster.component.scss'],
})
export class GameRosterComponent implements OnInit {
  positions: Position[];
  game: Game;
  athletes: Athlete[];
  selected: any;

  constructor(private athleteService: AthleteService, private httpenumService: HttpEnumService,
              private gameService: GameService, private route: ActivatedRoute,
              private toastController: ToastController, private router: Router,
              private rosterService: RosterService) { }

  ngOnInit() {
    debugger;
    this.getPositions();
    this.getGame(this.route.snapshot.paramMap.get('id'));
  }

  getPositions() {
    this.httpenumService.getPositions()
      .subscribe(positions => {
        this.positions = positions;
        this.selected = [
          { value: '', position: this.positions[0]},
          { value: '', position: this.positions[1]},
          { value: '', position: this.positions[2]},
          { value: '', position: this.positions[3]},
          { value: '', position: this.positions[4]},
          { value: '', position: this.positions[5]},
          { value: '', position: this.positions[6]},
          { value: '', position: this.positions[7]},
          { value: '', position: this.positions[8]},
          { value: '', position: this.positions[9]},
          { value: '', position: this.positions[10]}];
      });
  }

  getGame(id: any) {
    this.gameService.getGameById(id)
      .subscribe(game => {
        debugger
        this.game = game;
        this.athletes = game.athletes;
        this.selected = this.rosterService.populate(this.selected, this.game.activeRoster);
      });
  }

  /*
  onChange($event, select: any) {
    debugger;
    select.value !== null ? this.rosterService.removeAthlete(select, this.available) :
      this.rosterService.addAthlete(select, this.available);
    /*if (this.selected === null) this.rosterService.removeAthlete(id, this.activeRoster, this.available);
    else {
      this.activeRoster.push(new ActiveRoster(null, this.selected, this.game.id, id));
      this.available.forEach( (a, index) => {
        if (a.profile.name === this.selected) this.available.splice(index, 1);
      });
    }
    this.selected === null ?
      this.rosterService.removeAthlete(id, this.activeRoster, this.available) :
      this.rosterService.addAthlete(id, this.activeRoster, this.available, this.selected, this.game.id);
    /*if( this.selected === null ) this.rosterService.removeAthlete(id, this.activeRoster, this.available);

    //this.selected = undefined;
  }*/


  processRoster() {
    debugger;
    const filtered = this.rosterService.clean(this.selected);
    if( !this.rosterService.verify(filtered) ) {
      this.presentError();
      return;
    }
    this.game.activeRoster = this.rosterService.createRoster(filtered, this.game.id);
    debugger;
    this.gameService.updateGame(this.game).subscribe( (res) => {
      console.log(res);
      this.presentToast();
    });
  }

  navigate() {
    debugger;
    this.router.navigate(['/app/game']).then(res => {});
  }

  async presentToast() {
    const toast = await this.toastController.create({
      header: 'Success',
      message: 'Roster Submitted.',
      position: 'bottom',
      duration: 5000
    });
    await toast.present().then(this.navigate.bind(this));
  }

  async presentError() {
    const toast = await this.toastController.create({
      header: 'Error',
      message: 'Duplicates found. Please re-check before submitting.',
      position: 'bottom',
      duration: 10000
    });
    await toast.present().then();
  }

  compareAthletes = (o1: Athlete, o2: any, o3: any) => {
    debugger;
    return o1 && o2 ? o1.id === o2.id : false;
  }
}
