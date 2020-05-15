import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {AthletePractice} from '../../../classes/associations/AthletePractice';
import {Athlete} from '../../../classes/athlete';

@Component({
  selector: 'app-practice-form-modal',
  templateUrl: './practice-form-modal.component.html',
  styleUrls: ['./practice-form-modal.component.scss'],
})
export class PracticeFormModalComponent implements OnInit {
  athletes: Athlete[] = [];

  constructor(public navParams: NavParams, private modalController: ModalController) {
    this.athletes = this.navParams.get('athletes').athlete;
    // let cenas: Athlete[] = this.athletes.athlete;
    debugger;
  }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
