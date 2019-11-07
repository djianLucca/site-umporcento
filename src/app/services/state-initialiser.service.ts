import { Injectable } from '@angular/core';
import { IStateInitialiser } from './interfaces/istate-initialiser';
import { MenuItemService } from './menu-item.service';
import { SocialIconsService } from './social-icons.service';
import { StateService } from './state.service';
import { MenuItemTitle } from './enums/menuitemtitleenum';
import { MenuService } from './menu.service';
import { MenuItemUrl } from './enums/menuitemurlnum ';
import { SocialIconTitle } from './enums/socialicontitleenum ';
import { SocialIconClass } from './enums/socialiconclassenum';
import { SocialIconUrl } from './enums/socialiconurlenum';

@Injectable({
  providedIn: 'root'
})
export class StateInitialiserService implements IStateInitialiser {

  menu: MenuService;
  socialIcons: SocialIconsService[];
  _state: StateService;
  constructor() {
    this.menu = this.menuDefaultState();
    this.socialIcons = this.socialIconsDefaultState();
    this._state = new StateService(new Date().getHours(), this.menu, this.socialIcons);
  }
  menuDefaultState(): MenuService {
    return new MenuService(
        [
          new MenuItemService(MenuItemTitle.Test, MenuItemUrl.Test1),
          new MenuItemService(MenuItemTitle.Test1, MenuItemUrl.Test1)
        ]
      );
  }

  socialIconsDefaultState(): SocialIconsService[] {
    return [
      new SocialIconsService(
        SocialIconTitle.Facebook,
        SocialIconClass.Facebook,
        SocialIconUrl.Facebook
      ),
      new SocialIconsService(
        SocialIconTitle.Instagram,
        SocialIconClass.Instagram,
        SocialIconUrl.Instagram
      ),
      new SocialIconsService(
        SocialIconTitle.Spotify,
        SocialIconClass.Spotify,
        SocialIconUrl.Spotify
      ),
      new SocialIconsService(
        SocialIconTitle.Email,
        SocialIconClass.Email,
        SocialIconUrl.Email
      )
    ];
  }

  public getState(): StateService {
    return this._state;
  }
}
