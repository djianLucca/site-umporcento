import { SocialIconsService } from '../social-icons.service';
import { StateService } from '../state.service';
import { MenuGroupService } from '../menu-group.service';

export interface IStateInitialiser {
    menu: MenuGroupService[];
    socialIcons: SocialIconsService[];
    _state: StateService;

    menuDefaultState(): MenuGroupService[];
    socialIconsDefaultState(): SocialIconsService[];
    getState(): StateService;
}
