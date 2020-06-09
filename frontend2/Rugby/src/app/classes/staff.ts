import { Profile } from './profile';
import { StaffType} from './stafftype';

export class Staff {
  constructor(
  public id?: number,
  public staffNumber?: string,
  public profile?: Profile,
  public staffType?: any
  ) {
    this.id = id ? id : 0;
    this.staffNumber = staffNumber ? staffNumber : '';
    this.profile = profile ? profile : new Profile();
    this.staffType = staffType ? staffType : new StaffType();
  }
}
