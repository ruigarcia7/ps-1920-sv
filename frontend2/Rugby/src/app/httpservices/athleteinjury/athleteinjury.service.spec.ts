import { TestBed } from '@angular/core/testing';

import { AthleteinjuryService } from './athleteinjury.service';

describe('AthleteinjuryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AthleteinjuryService = TestBed.get(AthleteinjuryService);
    expect(service).toBeTruthy();
  });
});
