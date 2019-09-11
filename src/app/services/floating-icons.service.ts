import {
  Injectable
} from '@angular/core';
import {
  IFloatingIcon
} from './interfaces/ifloating-icon';
import {
  FloatingIconImage
} from './enums/floatingiconimageenum';
import {
  FloatingIconTitle
} from './enums/floatingicontitleenum';
import {
  FloatingIconUrl
} from './enums/floatingiconurlenum';

@Injectable({
  providedIn: 'root'
})
export class FloatingIconsService implements IFloatingIcon {
  private _image: FloatingIconImage;
  private _title: FloatingIconTitle;
  public _url: FloatingIconUrl;

  constructor(image: FloatingIconImage, title: FloatingIconTitle, url: FloatingIconUrl) {
    this._image = image;
    this.title = title;
    this._url = url;
  }

  public get image(): FloatingIconImage {
    return this._image;
  }

  public set image(value: FloatingIconImage) {
    this._image = value;
  }

  public get title(): FloatingIconTitle {
    return this._title;
  }

  public set title(value: FloatingIconTitle) {
    this._title = value;
  }

  public get url(): FloatingIconUrl {
    return this._url;
  }

  public set url(value: FloatingIconUrl) {
    this._url = value;
  }

}
