import { Injectable } from '@angular/core';
import { ImenuItem } from './interfaces/imenu-item';
import { MenuItemTitle } from './enums/menuitemtitleenum';
import { MenuItemUrl } from './enums/menuitemurlnum ';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService implements ImenuItem {
  _title: MenuItemTitle;
  _url: MenuItemUrl;

  constructor(title: MenuItemTitle, url: MenuItemUrl) {
    this._title = title;
    this._url = url;
  }

  public get title(): MenuItemTitle {
    return this._title;
  }

  public set title(v: MenuItemTitle) {
    this._title = v;
  }

  public get url(): MenuItemUrl {
    return this._url;
  }

  public set url(v: MenuItemUrl) {
    this._url = v;
  }

}
