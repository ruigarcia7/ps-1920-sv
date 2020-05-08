import { TestBed } from '@angular/core/testing';

import { PracticeService } from './practice.service';

describe('PracticeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PracticeService = TestBed.get(PracticeService);
    expect(service).toBeTruthy();
  });
});
