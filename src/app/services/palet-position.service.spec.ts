import { TestBed } from '@angular/core/testing';

import { PaletPositionService } from './palet-position.service';

describe('PaletPositionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaletPositionService = TestBed.get(PaletPositionService);
    expect(service).toBeTruthy();
  });
});
