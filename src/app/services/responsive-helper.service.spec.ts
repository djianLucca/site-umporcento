import { TestBed } from '@angular/core/testing';

import { ResponsiveHelperService } from './responsive-helper.service';

describe('ResponsiveHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponsiveHelperService = TestBed.get(ResponsiveHelperService);
    expect(service).toBeTruthy();
  });
});
