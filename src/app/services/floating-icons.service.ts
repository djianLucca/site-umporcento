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

export class FloatingIconsService implements IFloatingIcon {
  _image: FloatingIconImage;
  _title: FloatingIconTitle;
  _url: FloatingIconUrl;
  _labelStyle: { visibility: string };
  constructor(image: FloatingIconImage, title: FloatingIconTitle, url: FloatingIconUrl) {
    this._image = image;
    this._title = title;
    this._url = url;
    this._labelStyle = { visibility: 'hidden' };
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

  public get labelStyle(): { visibility: string } {
    return this._labelStyle;
  }

  public set labelStyle(value: { visibility: string }) {
    this._labelStyle = value;
  }


}
