import { Component, OnInit } from '@angular/core';
import { HttpAthleteGameStatsService } from '../../httpservices/athletegamestats/athletegamestats.service';
import { Game } from '../../classes/game';
import { GameService } from '../../httpservices/game/game.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  games: Game[];

  constructor(private gameService: GameService) {
  }

  ngOnInit() {this.showGames();}

  showGames() {
    this.gameService.getGames()
      .subscribe(games => {
        this.games = games;
      });
  }
}
