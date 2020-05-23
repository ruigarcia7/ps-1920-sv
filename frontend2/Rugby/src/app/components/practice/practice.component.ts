import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Practice } from '../../classes/practice';
import { Athlete } from '../../classes/athlete';
import { HttpPracticeService } from '../../httpservices/practice/practice.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {AlertController, PopoverController} from '@ionic/angular';
import { PracticePopoverComponent } from './practice-popover/practice-popover.component';
import {AthletePractice} from '../../classes/associations/AthletePractice';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
})

export class PracticeComponent implements OnInit {
  practices: Practice[];
  displayedColumns: string[] = ['date', 'local', 'comment', 'athletes', 'actions'];
  dataSource: any;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private httpPracticeService: HttpPracticeService,
              private popoverController: PopoverController, private alertController: AlertController) { }

  ngOnInit() {
    this.showPractices();
  }

  showPractices() {
    this.httpPracticeService.getPractices()
      .subscribe(practices => {
        this.practices = practices;
        this.dataSource = new MatTableDataSource(this.practices);
        this.dataSource.sort = this.sort;
        console.log('practices found ' + practices);
        debugger;
      });
  }

  async createPopover(athletePractices: AthletePractice[], ev) {
    const popover = await this.popoverController.create({
      component: PracticePopoverComponent,
      componentProps: { athletePractices },
      event: ev
    });
    debugger;
    return await popover.present();
  }

  async presentAlert(practice: Practice) {
    debugger;
    const alert = await this.alertController.create({
      header: 'Delete Practice',
      message: 'Are you sure you want to delete this Practice?',
      buttons: ['No',
        {
          text: 'Yes',
          handler: () => {
            this.deleteClick(practice);
          }
        }]
    });
    await alert.present();
  }

  deleteClick(practice: Practice) {
    debugger;
    this.httpPracticeService.deletePractice(practice.id)
      .subscribe( response => {
        console.log(response);
        this.refresh();
        debugger;
      });
  }

  refresh() {
    this.showPractices();
  }
}
