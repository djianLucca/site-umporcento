
import { Imenu } from './interfaces/imenu';
import { MenuItemService } from './menu-item.service';

// @Injectable({
//   providedIn: 'root'
// })
export class MenuService implements Imenu {
  _open: boolean;
  _items: MenuItemService[];
  constructor(items: MenuItemService[]) {
    this._open = false;
    this._items = items;
  }

  public toggleMenu(): boolean {
    if (this._open) {
      this._open = false;
    } else {
      this._open = true;
    }

    return this._open;
  }

  public get open(): boolean {
    return this._open;
  }

  public get items(): MenuItemService[] {
    return this._items;
  }

}
