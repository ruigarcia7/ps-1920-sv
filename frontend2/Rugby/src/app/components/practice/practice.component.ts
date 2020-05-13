import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Practice } from '../../classes/practice';
import { Athlete } from '../../classes/athlete';
import { PracticeService } from '../../httpservices/practice/practice.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PopoverController } from '@ionic/angular';
import { PracticePopoverComponent } from './practice-popover/practice-popover.component';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
})

export class PracticeComponent implements OnInit {
  practices: Practice[];
  displayedColumns: string[] = ['date', 'local', 'comment', 'athletes'];
  dataSource: any;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private practiceService: PracticeService, private popoverController: PopoverController) { }

  ngOnInit() {
    this.showPractices();
  }

  showPractices() {
    this.practiceService.getPractices()
      .subscribe(practices => {
        this.practices = practices;
        this.dataSource = new MatTableDataSource(this.practices);
        this.dataSource.sort = this.sort;
        console.log('practices found ' + practices);
      });
  }

  async createPopover(athletes: Athlete[], ev) {
    const popover = await this.popoverController.create({
      component: PracticePopoverComponent,
      componentProps: { athletes },
      event: ev
    });
    debugger;
    return await popover.present();
  }
}
