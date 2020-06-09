import { Component, OnInit } from '@angular/core';
import { Athlete } from '../../classes/athlete';
import { HttpAthleteService } from '../../../app/httpservices/athlete/athlete.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html',
  styleUrls: ['./athlete.component.scss'],
})

export class AthleteComponent implements OnInit {
  athletes: Athlete[];

  constructor(private athleteService: HttpAthleteService, private alertController: AlertController) {
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

  async presentAlert(athlete: Athlete) {
    debugger;
    const alert = await this.alertController.create({
      header: 'Delete Athlete',
      message: 'Are you sure you want to delete this Athlete?',
      buttons: ['No',
        {
          text: 'Yes',
          handler: () => {
            this.deleteClick(athlete);
          }
        }]
    });
    await alert.present();
  }

  deleteClick(athlete: Athlete) {
    debugger;
    this.athleteService.deleteAthlete(athlete.id)
      .subscribe( response => {
        console.log(response);
        //this.ngOnInit();
        this.refresh();
        debugger;
      });
  }

  refresh() {
    this.showAthletes();
  }

}
