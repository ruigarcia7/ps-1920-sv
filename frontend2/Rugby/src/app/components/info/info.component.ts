import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  info_data: any;

  constructor(private http: HttpClient, private popoverController: PopoverController) { }

  ngOnInit() {
    this.load();
    debugger;
  }

  load(): any {
    if (this.info_data) {
      return of(this.info_data);
    } else {
      return this.http
        .get('assets/data/data.json');
    }
  }

  async createPopover(type: string, ev: Event) {
    const popover = await this.popoverController.create({
      component: InfoComponent,
      componentProps: { type },
      event: ev
    });
    debugger;
    return await popover.present();
  }
}
