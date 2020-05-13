import { Component, OnInit } from '@angular/core';
import { Athlete } from '../../classes/athlete';
import { Profile } from '../../classes/profile';
import { Position } from '../../classes/position';
import {AthleteService} from '../../httpservices/athlete/athlete.service';
import { EnumService } from '../../httpservices/enum/enum.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-athlete-form',
  templateUrl: './athlete-form.component.html',
  styleUrls: ['./athlete-form.component.scss'],
})
export class AthleteFormComponent implements OnInit {
  athlete: Athlete;
  profile: Profile;
  positions: Position[];
  constructor(private athleteService: AthleteService, private enumService: EnumService,  private route: ActivatedRoute) { }


  ngOnInit() {
    /*if(path == 0)
      this.athlete = new;
    else
      this.athlete = fetch();
*/
    this.athlete = new Athlete();
    this.profile = new Profile();
    this.getPositions();
    this.athlete.profile = this.profile;
    if (this.route.snapshot.paramMap.get('id')) {
      this.athleteService.getAthleteById(this.route.snapshot.paramMap.get('id')).subscribe( item => this.athlete = item );
    }
  }

  getPositions() {
    this.enumService.getPositions()
      .subscribe( position => {
        this.positions = position;
      });
  }

  processAthlete() {
    this.athlete.positions = this.athlete.positions.toString();
    debugger;
    this.athleteService.postAthlete(this.athlete).subscribe( (res) => { console.log(res); });
  }

}
