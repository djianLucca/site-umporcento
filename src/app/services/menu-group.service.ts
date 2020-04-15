
import { IMenuGroup } from './interfaces/imenu-group';
import { MenuItemService } from './menu-item.service';

// @Injectable({
//   providedIn: 'root'
// })
export class MenuGroupService implements IMenuGroup {
  items: MenuItemService[];
  title: string;
  label: string;
  constructor(menuItems: MenuItemService[], title: string, label: string) { 
    this.items = menuItems;
    this.title = title;
    this.label = label;
  }
}
