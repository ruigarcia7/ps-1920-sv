import { TestBed } from '@angular/core/testing';

import { GamestatsService } from './gamestats.service';

describe('GamestatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GamestatsService = TestBed.get(GamestatsService);
    expect(service).toBeTruthy();
  });
});
