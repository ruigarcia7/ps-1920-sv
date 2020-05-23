import { Component, OnInit } from '@angular/core';
import {ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import {TrainingSchedule} from '../../classes/trainingschedule';
import {Athlete} from '../../classes/athlete';
import {AthleteService} from '../../httpservices/athlete/athlete.service';
import {TrainingScheduleService} from '../../httpservices/trainingschedule/trainingscheduleservice.service';

@Component({
  selector: 'app-training-schedule-form',
  templateUrl: './training-schedule-form.component.html',
  styleUrls: ['./training-schedule-form.component.scss'],
})
export class TrainingScheduleFormComponent implements OnInit {
  trainingSchedule: TrainingSchedule;
  athletes: Athlete[];
  constructor(private athleteService: AthleteService,
              private trainingScheduleService: TrainingScheduleService,
              private toastController: ToastController, private router: Router) { }

  ngOnInit() {
    this.trainingSchedule = new TrainingSchedule();
    this.getAthletes();
  }

  getAthletes() {
    this.athleteService.getAthletes()
      .subscribe( athletes => {
        this.athletes = athletes;
      });
  }

  processTrainingSchedule() {
    debugger;
    this.trainingScheduleService.postTrainingSchedule(this.trainingSchedule).subscribe( (res) => {
      console.log(res);
      this.presentToast();
    });
  }

  navigate() {
    debugger;
    this.router.navigate(['/app/training-schedule']).then(res => { window.location.reload(); });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      header: 'Success',
      message: 'Training Schedule Submitted.',
      position: 'bottom',
      duration: 5000
    });
    await toast.present().then(this.navigate.bind(this));
  }

}
