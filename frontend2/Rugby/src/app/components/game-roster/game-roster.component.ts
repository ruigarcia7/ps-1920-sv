import { Component, OnInit } from '@angular/core';
import {AthleteService} from '../../componentservices/athlete/athlete.service';
import {EnumService} from '../../httpservices/enum/enum.service';
import {GameService} from '../../httpservices/game/game.service';
import {ActiveRoster} from '../../classes/associations/ActiveRoster';
import {Position} from '../../classes/position';
import {Game} from '../../classes/game';
import {Athlete} from '../../classes/athlete';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-game-roster',
  templateUrl: './game-roster.component.html',
  styleUrls: ['./game-roster.component.scss'],
})
export class GameRosterComponent implements OnInit {
  activeRoster: ActiveRoster[];
  positions: Position[];
  game: Game;
  athletes: Athlete[];
  selected: Athlete;

  constructor(private athleteService: AthleteService, private enumService: EnumService,
              private gameService: GameService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPositions();
    this.getGame(this.route.snapshot.paramMap.get('id'));
  }

  getPositions() {
    this.enumService.getPositions()
      .subscribe(positions => {
        this.positions = positions;
      });
  }

  getGame(id: any) {
    this.gameService.getGameById(id)
      .subscribe(game => {
        this.game = game;
        this.activeRoster = game.activeRoster;
        this.athletes = game.athletes;
      });
  }

  onChange(id: any) {
    this.activeRoster.push(new ActiveRoster(null, this.selected, this.game.id, id));
    this.selected = undefined;
  }


  processRoster() {
    console.log(this.activeRoster);
    this.game.activeRoster = this.activeRoster;
    this.gameService.updateGame(this.game).subscribe( (res) => { console.log(res); });;
    debugger;
  }
}
