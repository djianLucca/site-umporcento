import { TestBed } from '@angular/core/testing';

import { InternalRoutesHandlerService } from './internal-routes-handler.service';

describe('InternalRoutesHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InternalRoutesHandlerService = TestBed.get(InternalRoutesHandlerService);
    expect(service).toBeTruthy();
  });
});
