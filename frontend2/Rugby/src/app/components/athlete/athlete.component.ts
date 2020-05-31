import { Component, OnInit } from '@angular/core';
import { Athlete } from '../../classes/athlete';
import { AthleteService } from '../../../app/httpservices/athlete/athlete.service';

@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html',
  styleUrls: ['./athlete.component.scss'],
})

export class AthleteComponent implements OnInit {
  athletes: Athlete[];

  constructor(private athleteService: AthleteService) {
  }

  ngOnInit() {this.showAthletes();}

  showAthletes() {
    this.athleteService.getAthletes()
      .subscribe(athletes => {
        debugger;
        this.athletes = athletes;
        console.log('athletes found ' + athletes);
      });
  }
}
