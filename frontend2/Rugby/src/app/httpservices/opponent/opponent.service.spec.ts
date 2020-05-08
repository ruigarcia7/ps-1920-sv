import { TestBed } from '@angular/core/testing';

import { OpponentService } from './opponent.service';

describe('OpponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpponentService = TestBed.get(OpponentService);
    expect(service).toBeTruthy();
  });
});
