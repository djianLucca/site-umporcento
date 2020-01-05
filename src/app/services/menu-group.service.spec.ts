import { TestBed } from '@angular/core/testing';

import { MenuGroupService } from './menu-group.service';

describe('MenuGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuGroupService = TestBed.get(MenuGroupService);
    expect(service).toBeTruthy();
  });
});
