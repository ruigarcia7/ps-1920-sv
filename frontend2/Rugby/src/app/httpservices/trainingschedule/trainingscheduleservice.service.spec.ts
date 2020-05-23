import { TestBed } from '@angular/core/testing';

import { TrainingScheduleService } from './trainingscheduleservice.service';

describe('TrauninscheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainingScheduleService = TestBed.get(TrainingScheduleService);
    expect(service).toBeTruthy();
  });
});
