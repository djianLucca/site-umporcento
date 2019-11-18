import { TestBed } from '@angular/core/testing';

import { TimelineApiService } from './timeline-api.service';

describe('TimelineApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimelineApiService = TestBed.get(TimelineApiService);
    expect(service).toBeTruthy();
  });
});
