import { SocialIconsService } from '../social-icons.service';
import { StateService } from '../state.service';
import { MenuService } from '../menu.service';

export interface IStateInitialiser {
    menu: MenuService;
    socialIcons: SocialIconsService[];
    _state: StateService;

    menuDefaultState(): MenuService;
    socialIconsDefaultState(): SocialIconsService[];
    getState(): StateService;
}
