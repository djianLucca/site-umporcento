import { TestBed } from '@angular/core/testing';

import { PageLocationHelperService } from './page-location-helper.service';

describe('PageLocationHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageLocationHelperService = TestBed.get(PageLocationHelperService);
    expect(service).toBeTruthy();
  });
});
