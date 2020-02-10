import { TestBed } from '@angular/core/testing';

import { SiteWideSearchService } from './site-wide-search.service';

describe('SiteWideSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiteWideSearchService = TestBed.get(SiteWideSearchService);
    expect(service).toBeTruthy();
  });
});
