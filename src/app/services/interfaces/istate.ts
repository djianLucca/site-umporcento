import {Page} from '../enums/pageenum';
import { FloatingIconsService } from '../floating-icons.service';
import { SocialIconsService } from '../social-icons.service';
import { MenuService } from '../menu.service';
import { PageSectionStatus } from '../enums/pageSectionStatusenum';
import { PageSectionBackground } from '../enums/pageSectionbackgroundenum';
export interface IState {
    page: Page;
    title: string;
    pageSection: PageSectionStatus;
    pageBackground: PageSectionBackground;
    floatingIcons: FloatingIconsService[] | undefined;
    socialIcons: SocialIconsService[] | undefined;
    menu: MenuService;
}
