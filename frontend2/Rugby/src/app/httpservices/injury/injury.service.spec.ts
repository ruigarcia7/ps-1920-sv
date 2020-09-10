import { TestBed } from '@angular/core/testing';

import { InjuryService } from './injury.service';

describe('InjuryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InjuryService = TestBed.get(InjuryService);
    expect(service).toBeTruthy();
  });
});
