import { Component, OnInit } from '@angular/core';
import { HttpAthleteService } from '../../httpservices/athlete/athlete.service';
import { GameService } from '../../httpservices/game/game.service';
import { Athlete } from '../../classes/athlete';
import { ActionSheetController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Tile } from '../../interfaces/tile';
import { MatGridListModule} from '@angular/material/grid-list';
import { ActivatedRoute} from '@angular/router';
import {Game} from '../../classes/game';
import {Event} from '../../classes/event';
import {Practice} from '../../classes/practice';
import {Tournament} from '../../classes/tournament';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-athlete-profile',
  templateUrl: './athlete-profile.component.html',
  styleUrls: ['./athlete-profile.component.scss'],
})
export class AthleteProfileComponent implements OnInit {
  athlete: Athlete;
  info: any;

  gamesColumns: string[] = ['date', 'local', 'opponent', 'score'];
  gamesDS: any;
  showGames = false;

  eventsColumns: string[] = ['name', 'description', 'date', 'local'];
  eventsDS: any;
  showEvents = false;

  practicesColumns: string[] = ['date', 'local'];
  practicesDS: any;
  showPractices = false;

  tournamentsColumns: string[] = ['name', 'date', 'local', 'classification'];
  tournamentsDS: any;
  showTournaments = false;

  segment = 'personal';

  constructor(
    private athleteService: HttpAthleteService,
    private gameService: GameService,
    public actionSheetCtrl: ActionSheetController,
    public inAppBrowser: InAppBrowser,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.showProfile();
    this.getAttendanceInfo();
  }

  showProfile() {
    this.athleteService.getAthleteById( this.route.snapshot.paramMap.get('id') )
      .subscribe(athlete => {
        this.athlete = athlete;
        debugger;
        console.log('athlete found ' + athlete);
      });
  }

  getAttendanceInfo() {
    this.athleteService.getAthleteAttendanceInfo( this.route.snapshot.paramMap.get('id') )
      .subscribe( info => {
        debugger;
        this.info = info;
        this.gamesDS = new MatTableDataSource(this.info.games);
        this.eventsDS = new MatTableDataSource(this.info.events);
        this.tournamentsDS = new MatTableDataSource(this.info.tournaments);
        this.practicesDS = new MatTableDataSource(this.info.practices);
      });
  }

  /*getGames() {
    this.gameService.getGamesByAthleteId( this.route.snapshot.paramMap.get('id') )
      .subscribe(games => {
        this.games = games;
        this.gamesDS = new MatTableDataSource(this.games);
        debugger;
      });
  }*/

  toggleShowGames() {
    debugger;
    this.showGames = !this.showGames;
  }

  toggleShowEvents() {
    debugger;
    this.showEvents = !this.showEvents;
  }

  toggleShowPractices() {
    debugger;
    this.showPractices = !this.showPractices;
  }

  toggleShowTournaments() {
    debugger;
    this.showTournaments = !this.showTournaments;
  }

  openExternalUrl(url: string) {
    this.inAppBrowser.create(
      url,
      '_blank'
    );
  }

  async openSpeakerShare(speaker: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Share ' + this.athlete.profile.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            console.log(
              'Copy link clicked on https://twitter.com/' + speaker.twitter
            );
            if (
              (window as any).cordova &&
              (window as any).cordova.plugins.clipboard
            ) {
              (window as any).cordova.plugins.clipboard.copy(
                'https://twitter.com/' + speaker.twitter
              );
            }
          }
        },
        {
          text: 'Share via ...'
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  async openContact(speaker: any) {
    const mode = 'ios'; // this.config.get('mode');

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Contact ' + this.athlete.profile.name,
      buttons: [
        {
          text: `Email ( ${this.athlete.profile.mail} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + speaker.email);
          }
        },
        {
          text: `Call ( ${this.athlete.profile.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + speaker.phone);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }
}
