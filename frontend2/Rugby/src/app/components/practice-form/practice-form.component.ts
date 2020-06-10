import { Component, OnInit } from '@angular/core';
import { Athlete } from '../../classes/athlete';
import { Practice } from '../../classes/practice';
import { HttpAthleteService } from '../../httpservices/athlete/athlete.service';
import { HttpPracticeService } from '../../httpservices/practice/practice.service';
import { FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {ModalController, ToastController} from '@ionic/angular';
import { PracticeFormModalComponent} from './practice-form-modal/practice-form-modal.component';
import { AthletePractice} from '../../classes/associations/AthletePractice';
import { PracticeService } from '../../componentservices/practice/practice.service';
import {ActivatedRoute, Router} from '@angular/router';

export class PracticeErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-practice-form',
  templateUrl: './practice-form.component.html',
  styleUrls: ['./practice-form.component.scss'],
})
export class PracticeFormComponent implements OnInit {
  requiredFormControl = new FormControl('', [Validators.required]);
  matcher = new PracticeErrorStateMatcher();
  practice: Practice;
  athletes: Athlete[];
  selected: Athlete[];
  all: boolean;

  selectOptions: any = {
    header: 'Attendances'
  };

  constructor(private athleteService: HttpAthleteService, private httppracticeService: HttpPracticeService
            , private modalController: ModalController, private practiceService: PracticeService,
              private toastController: ToastController, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.practice = new Practice();
    // check if "update" or post to set current object
    if (this.route.snapshot.paramMap.get('id')) {
      this.httppracticeService.getPracticeById(this.route.snapshot.paramMap.get('id')).subscribe(item => this.practice = item);
    }
    this.getAthletes();
  }

  getAthletes() {
    this.athleteService.getAthletes()
      .subscribe( athletes => {
        debugger;
        this.athletes = athletes;
        this.practice.athletePractices = [];
        // athletes.forEach(item => this.practice.athletePractices.push(new AthletePractice(null, item)));
      });
  }

  processPractice() {
    debugger;
    this.httppracticeService.postPractice(this.practice).subscribe( (res) => {
      console.log(res);
      this.presentToast();
    });
  }

  async onOk() {
    this.practiceService.refreshArray(this.selected, this.practice.athletePractices);
    debugger;
    const modal = await this.modalController.create({
      component: PracticeFormModalComponent,
      componentProps: { practice : this.practice }
    });
    // const data = await modal.onWillDismiss();
    return await modal.present();
    debugger;
  }

  navigate() {
    debugger;
    this.router.navigate(['/app/practice']).then(res => { window.location.reload(); });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      header: 'Success',
      message: 'Event Submitted.',
      position: 'bottom',
      duration: 5000
    });
    await toast.present().then(this.navigate.bind(this));
  }

  toggleAll() {
    return this.all ? this.selected = this.athletes : this.selected = [];
  }
}
