import { Component, OnInit } from '@angular/core';
import { Staff } from '../../classes/staff';
import { Profile } from '../../classes/profile';
import { StaffType } from '../../classes/stafftype';
import { StaffService } from '../../httpservices/staff/staff.service';
import { EnumService } from '../../httpservices/enum/enum.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-staff-form',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.scss'],
})
export class StaffFormComponent implements OnInit {
  staff: Staff;
  profile: Profile;
  stafftype: StaffType[];
  constructor(private staffService: StaffService, private enumService: EnumService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.staff = new Staff();
    this.profile = new Profile();
    this.staff.profile = this.profile;

    // check if "update" or post to set current object
    if (this.route.snapshot.paramMap.get('id')) {
      this.staffService.getStaffById(this.route.snapshot.paramMap.get('id')).subscribe(item => this.staff = item);
    }
    this.getTypes();
  }

  getTypes() {
    this.enumService.getStaffType()
      .subscribe( types => {
        this.stafftype = types;
      });
  }

  processStaff() {
    this.staff.stafftype = this.staff.stafftype.toString();
    debugger;
    this.staffService.postStaff(this.staff).subscribe( (res) => { console.log(res); });
  }

}
