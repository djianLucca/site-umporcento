import { TestBed } from '@angular/core/testing';

import { MenuItemService } from './menu-item.service';
import { MenuItemUrl } from './enums/menuitemurlnum ';
import { MenuItemTitle } from './enums/menuitemtitleenum  copy';

describe('MenuItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuItemService = new MenuItemService(MenuItemTitle.Test, MenuItemUrl.Test);
    expect(service).toBeTruthy();
  });

  it('should be Test title', () => {
    const service: MenuItemService = new MenuItemService(MenuItemTitle.Test, MenuItemUrl.Test);
    expect(service.title).toBe(MenuItemTitle.Test);
  });

  it('should be Test1 url', () => {
    const service: MenuItemService = new MenuItemService(MenuItemTitle.Test1, MenuItemUrl.Test1);
    expect(service.url).toBe(MenuItemUrl.Test1);
  });

  it('should set Test url', () => {
    const service: MenuItemService = new MenuItemService(MenuItemTitle.Test1, MenuItemUrl.Test1);
    service.url = MenuItemUrl.Test;
    expect(service.url).toBe(MenuItemUrl.Test);
  });

  it('should set Test1 title', () => {
    const service: MenuItemService = new MenuItemService(MenuItemTitle.Test, MenuItemUrl.Test);
    service.title = MenuItemTitle.Test1;
    expect(service.title).toBe(MenuItemTitle.Test1);
  });
});
