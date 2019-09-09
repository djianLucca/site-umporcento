import { Injectable } from '@angular/core';
import { IFloatingIcon } from './interfaces/ifloating-icon';
import { FloatingIconImage } from './enums/floatingiconimageenum';
import { FloatingIconTitle } from './enums/floatingicontitleenum';
import { FloatingIconUrl } from './enums/floatingiconurlenum';

@Injectable({
  providedIn: 'root'
})
export class FloatingIconsService implements IFloatingIcon {
  public image: FloatingIconImage;
  public title: FloatingIconTitle;
  public url: FloatingIconUrl;

  constructor(image, title, url) {
    this.image = image;
    this.title = title;
    this.url = url;
  }
}
