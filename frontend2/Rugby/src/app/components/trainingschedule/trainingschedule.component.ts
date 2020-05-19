import {Component, OnInit, Input, ViewChild} from '@angular/core';
import { TrainingSchedule } from '../../classes/trainingschedule';
import { Athlete } from '../../classes/athlete';
import { TrainingScheduleService } from '../../httpservices/trainingschedule/trainingscheduleservice.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PopoverController } from '@ionic/angular';
import { TrainingschedulePopoverComponent } from './trainingschedule-popover/trainingschedule-popover.component';

@Component({
  selector: 'app-trainingschedule',
  templateUrl: './trainingschedule.component.html',
  styleUrls: ['./trainingschedule.component.scss'],
})
export class TrainingScheduleComponent implements OnInit {
  trainingSchedules: TrainingSchedule[];
  displayedColumns: string[] = ['date', 'description', 'link', 'targets', 'actions'];
  dataSource: any;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private trainingService: TrainingScheduleService, private popoverController: PopoverController) {
  }

  ngOnInit() {
    this.showTrainingSchedules();
  }

  showTrainingSchedules() {
    this.trainingService.getTrainingSchedules()
      .subscribe(trainingschedules => {
        this.trainingSchedules = trainingschedules;
        this.dataSource = new MatTableDataSource(this.trainingSchedules);
        this.dataSource.sort = this.sort;
        console.log('trainings found ' + trainingschedules);
      });
  }

  async createPopover(athletes: Athlete[], ev) {
    const popover = await this.popoverController.create({
      component: TrainingschedulePopoverComponent,
      componentProps: {athletes},
      event: ev
    });
    debugger;
    return await popover.present();
  }
}
