import {Component, OnInit} from '@angular/core';
import {Staff} from '../../classes/staff';
import {StaffService} from '../../httpservices/staff/staff.service';
import {AlertController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
})

export class StaffComponent implements OnInit {
  staff: Staff[];

  constructor(private staffService: StaffService, private alertController: AlertController,
              private router: Router) { }

  ngOnInit() {this.showStaff(null); }

  showStaff(callback) {
    this.staffService.getStaff()
      .subscribe(staff => {
        this.staff = staff;
        console.log('staff found ' + staff);
        debugger;
        if (callback != null) callback();
      });
  }

  async presentAlert(staff: Staff) {
    debugger;
    const alert = await this.alertController.create({
      header: 'Delete Staff',
      message: 'Are you sure you want to delete this Staff?',
      buttons: ['No',
        {
          text: 'Yes',
          handler: () => {
            this.deleteClick(staff);
          }
        }]
    });
    await alert.present();
  }

  deleteClick(staff: Staff) {
    debugger;
    this.staffService.deleteStaff(staff.id)
      .subscribe( response => {
        console.log(response);
        //this.ngOnInit();
        this.refresh();
        debugger;
      });
  }

  refresh() {
    this.showStaff(null);
  }
}

