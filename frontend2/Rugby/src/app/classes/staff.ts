import { Profile } from './profile';
import { StaffType } from './stafftype';

export class Staff {
  constructor(
  public id?: number,
  public staffnumber?: string,
  public profile?: Profile,
  public stafftype?: StaffType
  ) {
    this.id = id ? id : 0;
    this.staffnumber = staffnumber ? staffnumber : '';
    this.profile = profile ? profile : new Profile();
    this.stafftype = stafftype ? stafftype : new StaffType();
  }
}
