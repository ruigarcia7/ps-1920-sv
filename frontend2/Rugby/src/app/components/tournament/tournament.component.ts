import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Game } from '../../classes/game';
import { Tournament } from '../../classes/tournament';
import { TournamentService } from '../../httpservices/tournament/tournament.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AlertController, PopoverController } from '@ionic/angular';
import { TournamentPopoverComponent } from './tournament-popover/tournament-popover.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss'],
})
export class TournamentComponent implements OnInit {
  tournaments: Tournament[];
  displayedColumns: string[] = ['name', 'date', 'local', 'classification', 'comment', 'games', 'actions'];
  dataSource: any;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private tournamentService: TournamentService, private popoverController: PopoverController,
              private router: Router, private alertController: AlertController) {}

  ngOnInit() {
    this.showTournaments();
  }

  showTournaments() {
    this.tournamentService.getTournaments()
      .subscribe(tournaments => {
        this.tournaments = tournaments;
        this.dataSource = new MatTableDataSource(this.tournaments);
        this.dataSource.sort = this.sort;
        console.log('tournaments found ' + tournaments);
        debugger;
      });
  }

  async createPopover(games: Game[], ev) {
    const popover = await this.popoverController.create({
      component: TournamentPopoverComponent,
      componentProps: { games },
      event: ev
    });
    debugger;
    return await popover.present();
  }

  async presentAlert(game: Game) {
    debugger;
    const alert = await this.alertController.create({
      header: 'Delete Tournament',
      message: 'Are you sure you want to delete this Tournament?',
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
    this.tournamentService.deleteTournament(game.id)
      .subscribe( response => {
        console.log(response);
        this.refresh();
        debugger;
      });
  }

  refresh() {
    this.showTournaments();
  }

}
