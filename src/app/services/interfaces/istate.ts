import {Page} from '../enums/pageenum';
import { FloatingIconsService } from '../floating-icons.service';
export interface IState {
    page: Page;
    title: string;
    floatingIcons: FloatingIconsService[];
}
