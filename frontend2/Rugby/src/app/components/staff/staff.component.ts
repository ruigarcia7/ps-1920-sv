import { Component, OnInit } from '@angular/core';
import {Staff} from '../../classes/staff';
import {StaffService} from '../../httpservices/staff/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
})
export class StaffComponent implements OnInit {
  staff: Staff[];

  constructor(private staffService: StaffService) { }

  ngOnInit() {this.showStaff();}

  showStaff() {
    this.staffService.getStaff()
      .subscribe(staff => {
        this.staff = staff;
        debugger;
        console.log('staff found ' + staff);
      });
  }
}

