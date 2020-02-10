import { TestBed } from '@angular/core/testing';

import { TwoDPositionService } from './2d-position.service';

describe('2dPositionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwoDPositionService = TestBed.get(TwoDPositionService);
    expect(service).toBeTruthy();
  });
});
