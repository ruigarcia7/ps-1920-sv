import { TestBed } from '@angular/core/testing';

import { EnumService } from './enum.service';

describe('EnumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnumService = TestBed.get(EnumService);
    expect(service).toBeTruthy();
  });
});
