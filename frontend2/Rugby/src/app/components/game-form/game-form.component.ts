import { Component, OnInit } from '@angular/core';
import { Game } from '../../classes/game';
import { Opponent } from '../../classes/opponent';
import { Athlete } from '../../classes/athlete';
import { GameService } from '../../httpservices/game/game.service';
import { OpponentService } from '../../httpservices/opponent/opponent.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpAthleteService} from '../../httpservices/athlete/athlete.service';
import {ErrorStateMatcher} from "@angular/material/core";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";

export class GameErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss'],
})
export class GameFormComponent implements OnInit {
  requiredFormControl = new FormControl('', [Validators.required]);
  matcher = new GameErrorStateMatcher();
  game: Game;
  opponents: Opponent[];
  athletes: Athlete[];
  all: boolean;

  constructor(private gameService: GameService, private opponentService: OpponentService,
              private athleteService: HttpAthleteService, private route: ActivatedRoute,
              private toastController: ToastController, private router: Router) { }

  ngOnInit() {
    this.game = new Game();

    // check if "update" or post to set current object
    if (this.route.snapshot.paramMap.get('id')) {
      this.gameService.getGameById(this.route.snapshot.paramMap.get('id')).subscribe(item => this.game = item);
    }
    this.getOpponents();
    this.getAthletes();
  }

  getOpponents() {
    this.opponentService.getOpponents()
      .subscribe( opponents => {
        this.opponents = opponents;
      });
  }

  getAthletes() {
    this.athleteService.getAthletes()
      .subscribe( athletes => {
        this.athletes = athletes;
      });
  }

  processGame() {
    this.route.snapshot.paramMap.get('id') ?
      this.gameService.updateGame(this.game).subscribe((res) => {
        this.presentToast();
      }) :
    this.gameService.postGame(this.game).subscribe( (res) => {
      this.presentToast();
    });
  }


  navigate() {
    debugger;
    this.router.navigate(['/app/game']).then(res => { window.location.reload(); });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      header: 'Success',
      message: 'Game Submitted.',
      position: 'bottom',
      duration: 5000
    });
    await toast.present().then(this.navigate.bind(this));
  }

  toggleAll() {
    return this.all ? this.game.athletes = this.athletes : this.game.athletes = [];
  }
}
