import { Profile } from './profile';
import { StaffType } from './stafftype';

export class Staff {
  constructor(
  private id?: number,
  private staffnumber?: string,
  private profile?: Profile,
  private stafftype?: StaffType
  ) {
    this.id = id ? id : 0;
    this.staffnumber = staffnumber ? staffnumber : '';
    this.profile = profile ? profile : new Profile();
    this.stafftype = stafftype ? stafftype : new StaffType();
  }
}
