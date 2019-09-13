import { TestBed } from '@angular/core/testing';

import { StateInitialiserService } from './state-initialiser.service';

describe('StateInitialiserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StateInitialiserService = TestBed.get(StateInitialiserService);
    expect(service).toBeTruthy();
  });
});
