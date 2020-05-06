import { Component, OnInit } from '@angular/core';
import {EventService} from '../../httpservices/event.service';
import {Athlete} from '../../classes/athlete';

@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html',
  styleUrls: ['./athlete.component.scss'],
})
export class AthleteComponent implements OnInit {

  athletes: Athlete[];

  constructor(private eventService: EventService) { }

  ngOnInit() {}

  showEvents() {
    this.eventService.getAtlhletes()
      .subscribe(athletes => {
        debugger;
        this.athletes = athletes;
        console.log('events found ' + athletes);
      });
  }
}
