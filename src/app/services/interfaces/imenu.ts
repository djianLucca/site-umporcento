import { MenuItemService } from '../menu-item.service';

export interface Imenu {
    _open: boolean;
    _items: MenuItemService[];

    toggleMenu(): boolean;
}
