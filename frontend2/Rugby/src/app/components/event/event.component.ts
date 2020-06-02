import {Component, OnInit, Input, ViewChild} from '@angular/core';
import { Event } from '../../classes/event';
import { Profile } from '../../classes/profile';
import { EventService } from '../../httpservices/event/event.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {AlertController, PopoverController} from '@ionic/angular';
import { EventPopoverComponent } from './event-popover/event-popover.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})

export class EventComponent implements OnInit {
  events: Event[];
  displayedColumns: string[] = ['name', 'description', 'date', 'local', 'profiles', 'actions'];
  dataSource: any;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private eventService: EventService, private popoverController: PopoverController,
              private alertController: AlertController) {}

  ngOnInit() {
    this.showEvents();
  }

  showEvents() {
    this.eventService.getEvents()
      .subscribe(events => {
        this.events = events;
        this.dataSource = new MatTableDataSource(this.events);
        this.dataSource.sort = this.sort;
        console.log('events found ' + events);
      });
  }

  async createPopover(profiles: Profile[], ev) {
    const popover = await this.popoverController.create({
      component: EventPopoverComponent,
      componentProps: { profiles },
      event: ev
    });
    debugger;
    return await popover.present();
  }

  async presentAlert(event: Event) {
    debugger;
    const alert = await this.alertController.create({
      header: 'Delete Event',
      message: 'Are you sure you want to delete this Event?',
      buttons: ['No',
        {
          text: 'Yes',
          handler: () => {
            this.deleteClick(event);
          }
        }]
    });
    await alert.present();
  }

  deleteClick(event: Event) {
    debugger;
    this.eventService.deleteEvent(event.id)
      .subscribe( response => {
        console.log(response);
        this.refresh();
        debugger;
      });
  }

  refresh() {
    this.showEvents();
  }
}
