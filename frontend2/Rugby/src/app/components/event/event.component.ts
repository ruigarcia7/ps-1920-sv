import { Component, OnInit , Input} from '@angular/core';
import { Event } from '../../classes/event';
import { EventService } from '../../httpservices/event/event.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})

export class EventComponent implements OnInit {
  events: Event[];
  displayedColumns: string[] = ['ID', 'name', 'description', 'date', 'local', 'profiles'];

  constructor(private eventService: EventService) {}

  ngOnInit() {}

  showEvents() {
    this.eventService.getEvents()
      .subscribe(events => {
        this.events = events;
        debugger;
        console.log('events found ' + events);
      });
  }
}
