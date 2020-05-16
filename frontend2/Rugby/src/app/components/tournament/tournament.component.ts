import {Component, OnInit, Input, ViewChild} from '@angular/core';
import { Game } from '../../classes/game';
import { Tournament } from '../../classes/tournament';
import { TournamentService } from '../../httpservices/tournament/tournament.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EventPopoverComponent } from '../event/event-popover/event-popover.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss'],
})
export class TournamentComponent implements OnInit {
  tournaments: Tournament[];
  displayedColumns: string[] = ['name', 'classification', 'comment', 'games'];
  dataSource: any;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private tournamentService: TournamentService, private popoverController: PopoverController) {}

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
      });
  }

  async createPopover(games: Game[], ev) {
    const popover = await this.popoverController.create({
      component: EventPopoverComponent,
      componentProps: { games },
      event: ev
    });
    debugger;
    return await popover.present();
  }

}
