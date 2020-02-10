import { TestBed } from '@angular/core/testing';

import { MenuTitlePositionService } from './menu-title-position.service';

describe('MenuTitlePositionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuTitlePositionService = TestBed.get(MenuTitlePositionService);
    expect(service).toBeTruthy();
  });
});
