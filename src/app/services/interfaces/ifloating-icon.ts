import {FloatingIconImage} from '../enums/floatingiconimageenum';
import {FloatingIconTitle} from '../enums/floatingicontitleenum';
import {FloatingIconUrl} from '../enums/floatingiconurlenum';

export interface IFloatingIcon {
    image: FloatingIconImage;
    title: FloatingIconTitle;
    url: FloatingIconUrl;
}
