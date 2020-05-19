import { Component, OnInit } from '@angular/core';
import { Tournament } from '../../classes/tournament';
import { Game } from '../../classes/game';
import { TournamentService } from '../../httpservices/tournament/tournament.service';
import { GameService } from '../../httpservices/game/game.service';
import { FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tournament-form',
  templateUrl: './tournament-form.component.html',
  styleUrls: ['./tournament-form.component.scss'],
})
export class TournamentFormComponent implements OnInit {
  tournament: Tournament;
  games: Game[];
  constructor(private gameService: GameService, private tournamentService: TournamentService) { }

  ngOnInit() {
    this.tournament = new Tournament();
    this.getGames();
  }

  getGames() {
    this.gameService.getGames()
        .subscribe( games => {
          this.games = games;
        });
  }

  processTournament() {
    debugger;
    this.tournamentService.postTournament(this.tournament).subscribe( (res) => { console.log(res); });
  }

}
