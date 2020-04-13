import { IsocialIcon } from './interfaces/isocial-icon';
import { SocialIconTitle } from './enums/socialicontitleenum ';
import { SocialIconClass } from './enums/socialiconclassenum';
import { SocialIconUrl } from './enums/socialiconurlenum';


export class SocialIconsService implements IsocialIcon {
  _title: SocialIconTitle;
  _cssClass: SocialIconClass;
  _url: SocialIconUrl;

  constructor(title: SocialIconTitle, cssClass: SocialIconClass, url: SocialIconUrl) {
    this._title = title;
    this._cssClass = cssClass;
    this._url = url;
  }

  public get title(): SocialIconTitle {
    return this._title;
  }

  public set title(content: SocialIconTitle) {
    this._title = content;
  }

  public get cssClass(): SocialIconClass {
    return this._cssClass;
  }

  public set cssClass(v: SocialIconClass) {
    this._cssClass = v;
  }

  public get url(): SocialIconUrl {
    return this._url;
  }

  public set url(v: SocialIconUrl) {
    this._url = v;
  }

}
