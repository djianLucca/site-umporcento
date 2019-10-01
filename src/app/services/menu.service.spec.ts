import { TestBed } from '@angular/core/testing';

import { MenuService } from './menu.service';
import { MenuItemService } from './menu-item.service';
import { MenuItemTitle } from './enums/menuitemtitleenum';
import { MenuItemUrl } from './enums/menuitemurlnum ';

describe('MenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuService = new MenuService([new MenuItemService(MenuItemTitle.Test, MenuItemUrl.Test)]);
    expect(service).toBeTruthy();
  });

  it('Menu open variable should start false', () => {
    const service: MenuService = new MenuService([new MenuItemService(MenuItemTitle.Test, MenuItemUrl.Test)]);
    expect(service.open).toBe(false);
  });
  it('Menu open variable should be true after change', () => {
    const service: MenuService = new MenuService([new MenuItemService(MenuItemTitle.Test, MenuItemUrl.Test)]);
    service.toggleMenu();
    expect(service.open).toBe(true);
  });
});
