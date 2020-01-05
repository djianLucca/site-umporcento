import { Injectable } from '@angular/core';
import { IStateInitialiser } from './interfaces/istate-initialiser';
import { MenuItemService } from './menu-item.service';
import { SocialIconsService } from './social-icons.service';
import { StateService } from './state.service';
import { MenuItemTitle } from './enums/menuitemtitleenum';
import { MenuItemUrl } from './enums/menuitemurlnum ';
import { SocialIconTitle } from './enums/socialicontitleenum ';
import { SocialIconClass } from './enums/socialiconclassenum';
import { SocialIconUrl } from './enums/socialiconurlenum';
import { MenuGroupService } from './menu-group.service';

@Injectable({
  providedIn: 'root'
})
export class StateInitialiserService implements IStateInitialiser {

  menu: MenuGroupService[];
  socialIcons: SocialIconsService[];
  _state: StateService;
  constructor() {
    this.menu = this.menuDefaultState();
    this.socialIcons = this.socialIconsDefaultState();
    this._state = new StateService(new Date().getHours(), this.menu, this.socialIcons);
  }

  menuDefaultState(): MenuGroupService[] {
    
    return [
      new MenuGroupService(
        this.getDayMenuItems(),
        'DIA',
        '<u>como</u> fazemos?'
      ),
      new MenuGroupService(
        this.getAfternoonMenuItems(),
        'TARDE',
        'o <u>quê</u> fizemos?'
      ),
      new MenuGroupService(
        this.getNigthMenuItems(),
        'NOITE',
        'formas de <u>conexão</u>'
      )
    ]
  }
  getDayMenuItems(): MenuItemService[]{
    return [
      new MenuItemService(MenuItemTitle.BrandManual, MenuItemUrl.BrandManual),
      new MenuItemService(MenuItemTitle.CultureGuide, MenuItemUrl.CultureGuide),
      new MenuItemService(MenuItemTitle.Magazine, MenuItemUrl.Magazine),
      new MenuItemService(MenuItemTitle.Tree, MenuItemUrl.Tree),
      new MenuItemService(MenuItemTitle.Compass, MenuItemUrl.Compass),
      new MenuItemService(MenuItemTitle.Guardians, MenuItemUrl.Guardians),
    ]
  }

  getAfternoonMenuItems(): MenuItemService[]{
    return [
      new MenuItemService(MenuItemTitle.Timeline, MenuItemUrl.Timeline)
    ]
  }
  
  getNigthMenuItems(): MenuItemService[]{
    return [
      new MenuItemService(MenuItemTitle.Colab, MenuItemUrl.Colab),
      new MenuItemService(MenuItemTitle.Stamp, MenuItemUrl.Stamp),
      new MenuItemService(MenuItemTitle.Us, MenuItemUrl.Us),
      new MenuItemService(MenuItemTitle.Talks, MenuItemUrl.Talks),
      new MenuItemService(MenuItemTitle.Network, MenuItemUrl.Network),
      new MenuItemService(MenuItemTitle.Gabw, MenuItemUrl.Gabw),
      new MenuItemService(MenuItemTitle.Contact, MenuItemUrl.Contact),
    ]
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
