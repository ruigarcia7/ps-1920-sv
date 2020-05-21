import {Component, OnInit, Input, ViewChild} from '@angular/core';
import { Game } from '../../classes/game';
import { Athlete } from '../../classes/athlete';
import { GameService } from '../../httpservices/game/game.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { GamePopoverComponent} from '../../components/game/game-popover/game-popover.component';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  games: Game[];
  displayedColumns: string[] = ['date', 'local', 'opponent', 'comment', 'athletes', 'actions'];
  dataSource: any;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private gameService: GameService, private popoverController: PopoverController) {}

  ngOnInit() {
    this.showGames();
  }

  showGames() {
    this.gameService.getGames()
      .subscribe(games => {
        this.games = games;
        this.dataSource = new MatTableDataSource(this.games);
        this.dataSource.sort = this.sort;
        debugger;
        console.log('games found ' + games);
      });
  }

  async createPopover(athletes: Athlete[], ev) {
    const popover = await this.popoverController.create({
      component: GamePopoverComponent,
      componentProps: { athletes },
      event: ev
    });
    debugger;
    return await popover.present();
  }
}



