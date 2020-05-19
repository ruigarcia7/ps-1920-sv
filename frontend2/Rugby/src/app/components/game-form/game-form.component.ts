import { Component, OnInit } from '@angular/core';
import { Game } from '../../classes/game';
import { Opponent } from '../../classes/opponent';
import { GameService } from '../../httpservices/game/game.service';
import { OpponentService } from '../../httpservices/opponent/opponent.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss'],
})
export class GameFormComponent implements OnInit {
  game: Game;
  opponents: Opponent[];
  constructor(private gameService: GameService, private opponentService: OpponentService
              , private route: ActivatedRoute) { }

  ngOnInit() {
    this.game = new Game();

    // check if "update" or post to set current object
    if (this.route.snapshot.paramMap.get('id')) {
      this.gameService.getGameById(this.route.snapshot.paramMap.get('id')).subscribe(item => this.game = item);
    }
    this.getOpponents();
  }

  getOpponents() {
    this.opponentService.getOpponents()
      .subscribe( opponents => {
        this.opponents = opponents;
      });
  }

  processGame() {
    debugger;
    this.gameService.postGame(this.game).subscribe( (res) => { console.log(res); });
  }

}
