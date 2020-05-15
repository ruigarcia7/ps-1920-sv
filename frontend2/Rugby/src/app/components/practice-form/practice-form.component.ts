import { Component, OnInit } from '@angular/core';
import { Athlete } from '../../classes/athlete';
import { Practice } from '../../classes/practice';
import { AthleteService } from '../../httpservices/athlete/athlete.service';
import { PracticeService } from '../../httpservices/practice/practice.service';
import { FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {ModalController} from "@ionic/angular";
import {EventPopoverComponent} from "../event/event-popover/event-popover.component";

@Component({
  selector: 'app-practice-form',
  templateUrl: './practice-form.component.html',
  styleUrls: ['./practice-form.component.scss'],
})
export class PracticeFormComponent implements OnInit {
  practice: Practice;
  athletes: Athlete[];
  constructor(private athleteService: AthleteService, private practiceService: PracticeService
            ,modalController: ModalController) { }

  ngOnInit() {
    this.practice = new Practice();
    this.getAthletes();
  }

  getAthletes() {
    this.athleteService.getAthletes()
      .subscribe( athletes => {
        this.athletes = athletes;
      });
  }

  processPractice() {
    debugger;
    this.practiceService.postPractice(this.practice).subscribe( (res) => { console.log(res); });
  }

  /*async onOk(){
    const popover = await this.popoverController.create({
      component: EventPopoverComponent,
      componentProps: { profiles },
      event: ev
    });
    debugger;
    return await popover.present();
  }*/
}
