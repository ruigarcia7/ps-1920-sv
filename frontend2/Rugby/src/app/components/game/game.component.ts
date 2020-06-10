import {Component, OnInit, Input, ViewChild} from '@angular/core';
import { Game } from '../../classes/game';
import { Athlete } from '../../classes/athlete';
import { GameService } from '../../httpservices/game/game.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { GamePopoverComponent} from '../../components/game/game-popover/game-popover.component';
import {AlertController, PopoverController} from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  games: Game[];
  displayedColumns: string[] = ['date', 'local', 'opponent', 'score', 'comment', 'athletes', 'actions'];
  dataSource: any;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private gameService: GameService, private popoverController: PopoverController,
              private alertController: AlertController, private location: Location) {}

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

  async presentAlert(game: Game) {
    debugger;
    const alert = await this.alertController.create({
      header: 'Delete Game',
      message: 'Are you sure you want to delete this Game?',
      buttons: ['No',
        {
          text: 'Yes',
          handler: () => {
            this.deleteClick(game);
          }
        }]
    });
    await alert.present();
  }

  deleteClick(game: Game) {
    debugger;
    this.gameService.deleteGame(game.id)
      .subscribe( response => {
        console.log(response);
        this.refresh();
        debugger;
      });
  }

  refresh() {
    this.showGames();
  }
}



