import { TestBed } from '@angular/core/testing';

import { StateManipulatorService } from './state-manipulator.service';

describe('StateManipulatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StateManipulatorService = TestBed.get(StateManipulatorService);
    expect(service).toBeTruthy();
  });
});
