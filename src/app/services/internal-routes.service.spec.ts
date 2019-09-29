import { TestBed } from '@angular/core/testing';

import { InternalRoutesService } from './internal-routes.service';

describe('InternalRoutesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InternalRoutesService = TestBed.get(InternalRoutesService);
    expect(service).toBeTruthy();
  });
});
