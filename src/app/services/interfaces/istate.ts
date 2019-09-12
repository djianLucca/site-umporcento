import {Page} from '../enums/pageenum';
import { FloatingIconsService } from '../floating-icons.service';
import { SocialIconsService } from '../social-icons.service';
import { MenuService } from '../menu.service';
export interface IState {
    page: Page;
    title: string;
    floatingIcons: FloatingIconsService[];
    socialIcons: SocialIconsService[];
    menu: MenuService;
}
