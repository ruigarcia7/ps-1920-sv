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
  }

  ngOnInit() {
    this.athletes = this.navParams.get('practice');
    debugger;
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
