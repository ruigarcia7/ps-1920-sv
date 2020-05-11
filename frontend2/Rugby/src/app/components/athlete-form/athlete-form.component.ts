import { Component, OnInit } from '@angular/core';
import { Athlete } from '../../classes/athlete';
import { Profile } from '../../classes/profile';
import { Position } from '../../classes/position';
import {AthleteService} from '../../httpservices/athlete/athlete.service';
import { EnumService } from '../../httpservices/enum/enum.service';

@Component({
  selector: 'app-athlete-form',
  templateUrl: './athlete-form.component.html',
  styleUrls: ['./athlete-form.component.scss'],
})
export class AthleteFormComponent implements OnInit {
  athlete: Athlete;
  profile: Profile;
  positions: Position[];
  constructor(private athleteService: AthleteService, private enumService: EnumService) { }

  ngOnInit() {
    this.athlete = new Athlete();
    this.profile = new Profile();
    this.athlete.profile = this.profile;
    this.getPositions();
    debugger;
  }

  getPositions() {
    this.enumService.getPositions()
      .subscribe( position => {
        this.positions = position;
        debugger;
      });
  }

  processAthlete() {
    const a = this.athlete;
    debugger;
    this.athleteService.postAthlete(this.athlete).subscribe( (res) => { console.log(res); });
  }

}
