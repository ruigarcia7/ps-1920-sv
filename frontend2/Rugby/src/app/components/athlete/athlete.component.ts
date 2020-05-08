import { Component, OnInit } from '@angular/core';
import {Athlete} from '../../classes/athlete';
import {EventService} from '../../../app/httpservices/event/event.service';

@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html',
  styleUrls: ['./athlete.component.scss'],
})
export class AthleteComponent implements OnInit {
  athletes: Athlete[];
  displayedColumns: string[] = ['ID', 'height', 'weight', 'athletenumber', 'comment'
    , 'profile', 'practices', 'trainingschedules', 'games', 'athletegamestats'];

  constructor(private eventService: EventService) { }

  ngOnInit() {this.showAthletes();}

  showAthletes() {
    this.eventService.getAthletes()
      .subscribe(athletes => {
        this.athletes = athletes;
        debugger;
        console.log('athletes found ' + athletes);
      });
  }

  stuff() {
    this.athletes.forEach(athlete => {
      console.log(athlete.id);
    });
  }
}
