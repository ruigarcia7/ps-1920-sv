import { Component, OnInit } from '@angular/core';
import { Tournament } from '../../classes/tournament';
import { Game } from '../../classes/game';
import { TournamentService } from '../../httpservices/tournament/tournament.service';
import { GameService } from '../../httpservices/game/game.service';
import { FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ModalController, ToastController } from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {GameErrorStateMatcher} from "../game-form/game-form.component";

export class TournamentErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-tournament-form',
  templateUrl: './tournament-form.component.html',
  styleUrls: ['./tournament-form.component.scss'],
})
export class TournamentFormComponent implements OnInit {
  requiredFormControl = new FormControl('', [Validators.required]);
  matcher = new GameErrorStateMatcher();
  tournament: Tournament;
  games: Game[];
  constructor(private gameService: GameService, private tournamentService: TournamentService,
              private toastController: ToastController, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.tournament = new Tournament();
    // check if "update" or post to set current object
    if (this.route.snapshot.paramMap.get('id')) {
      this.tournamentService.getTournamentById(this.route.snapshot.paramMap.get('id')).subscribe(item => this.tournament = item);
    }
    this.getGames();
  }

  getGames() {
    this.gameService.getGames()
        .subscribe( games => {
          this.games = games;
        });
  }

  processTournament() {
    this.route.snapshot.paramMap.get('id') ?
      this.tournamentService.updateTournament(this.tournament).subscribe((res) => {
        this.presentToast();
      }) :
    this.tournamentService.postTournament(this.tournament).subscribe( (res) => {
      this.presentToast();
    });
  }

  navigate() {
    debugger;
    this.router.navigate(['/app/tournament']).then(res => { window.location.reload(); });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      header: 'Success',
      message: 'Tournament Submitted.',
      position: 'bottom',
      duration: 5000
    });
    await toast.present().then(this.navigate.bind(this));
  }

}
