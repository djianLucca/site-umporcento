import { MenuItemService } from '../menu-item.service';

export interface IMenuGroup {
    items: MenuItemService[];
    title: string;
    label: string;
}
