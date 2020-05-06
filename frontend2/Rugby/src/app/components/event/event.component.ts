import { Component, OnInit , Input} from '@angular/core';
import { Event } from '../../classes/event';
import { EventService } from '../../httpservices/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})

export class EventComponent implements OnInit {
  events: Event[];

  constructor(private eventService: EventService) { }

  ngOnInit() {}

  showEvents() {
    this.eventService.getEvents()
      .subscribe(events => this.events = events);
  }
}
