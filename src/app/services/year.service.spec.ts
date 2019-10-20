import { TestBed } from '@angular/core/testing';

import { YeareService } from './year.service';

describe('YearServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YearServiceService = TestBed.get(YearServiceService);
    expect(service).toBeTruthy();
  });
});
