import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {AthletePractice} from '../../../classes/associations/AthletePractice';
import {Athlete} from '../../../classes/athlete';
import {forEach} from '@angular-devkit/schematics';

@Component({
  selector: 'app-practice-form-modal',
  templateUrl: './practice-form-modal.component.html',
  styleUrls: ['./practice-form-modal.component.scss'],
})
export class PracticeFormModalComponent implements OnInit {
  athletes: Athlete[] = [];
  athletePractice: AthletePractice[] = [];

  displayedColumns: string[] = ['name', 'regular', 'physio'];


  constructor(public navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    this.athletePractice = this.navParams.get('practice').athletePractices;
    debugger;
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
