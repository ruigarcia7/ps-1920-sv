import { Component, OnInit } from '@angular/core';
import { EventService } from '../../httpservices/event.service';
import { Athlete } from '../../classes/athlete';

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
