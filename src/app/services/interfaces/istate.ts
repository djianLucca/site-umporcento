import {Page} from '../enums/pageenum';
import { FloatingIconsService } from '../floating-icons.service';
import { SocialIconsService } from '../social-icons.service';
import { PageSectionStatus } from '../enums/pageSectionStatusenum';
import { PageSectionBackground } from '../enums/pageSectionbackgroundenum';
import { MenuGroupService } from '../menu-group.service';
export interface IState {
    page: Page;
    title: string;
    pageSection: PageSectionStatus;
    pageBackground: PageSectionBackground;
    floatingIcons: FloatingIconsService[] | undefined;
    socialIcons: SocialIconsService[] | undefined;
    menu: MenuGroupService[];
}
