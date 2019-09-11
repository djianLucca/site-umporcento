import {FloatingIconImage} from '../enums/floatingiconimageenum';
import {FloatingIconTitle} from '../enums/floatingicontitleenum';
import {FloatingIconUrl} from '../enums/floatingiconurlenum';

export interface IFloatingIcon {
    _image: FloatingIconImage;
    _title: FloatingIconTitle;
    _url: FloatingIconUrl;
}
