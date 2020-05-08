import { TestBed } from '@angular/core/testing';

import { TrauninscheduleService } from './trauninschedule.service';

describe('TrauninscheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrauninscheduleService = TestBed.get(TrauninscheduleService);
    expect(service).toBeTruthy();
  });
});
