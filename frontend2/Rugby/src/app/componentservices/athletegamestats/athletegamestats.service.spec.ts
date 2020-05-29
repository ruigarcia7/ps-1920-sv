import { TestBed } from '@angular/core/testing';

import { AthletegamestatsService } from './athletegamestats.service';

describe('AthletegamestatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AthletegamestatsService = TestBed.get(AthletegamestatsService);
    expect(service).toBeTruthy();
  });
});
