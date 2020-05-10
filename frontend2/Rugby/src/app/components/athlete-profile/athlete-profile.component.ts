import { Component, OnInit } from '@angular/core';
import { EventService } from '../../httpservices/event/event.service';
import { Athlete } from '../../classes/athlete';
import { ActionSheetController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Tile } from '../../interfaces/tile';
import { MatGridListModule} from '@angular/material/grid-list';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-athlete-profile',
  templateUrl: './athlete-profile.component.html',
  styleUrls: ['./athlete-profile.component.scss'],
})
export class AthleteProfileComponent implements OnInit {
  athlete: Athlete;

  constructor(
    private eventService: EventService,
    public actionSheetCtrl: ActionSheetController,
    public inAppBrowser: InAppBrowser,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {this.showProfile(); }

  showProfile() {
    this.eventService.getAthlete( this.route.snapshot.paramMap.get('id') )
      .subscribe(athlete => {
        this.athlete = athlete;
        debugger;
        console.log('athlete found ' + athlete);
      });
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
