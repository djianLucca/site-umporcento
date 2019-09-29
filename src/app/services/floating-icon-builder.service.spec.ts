import { TestBed } from '@angular/core/testing';

import { FloatingIconBuilderService } from './floating-icon-builder.service';

describe('FloatingIconBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FloatingIconBuilderService = TestBed.get(FloatingIconBuilderService);
    expect(service).toBeTruthy();
  });
});
