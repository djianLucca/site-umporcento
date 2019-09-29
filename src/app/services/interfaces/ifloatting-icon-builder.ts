import { FloatingIconImage } from '../enums/floatingiconimageenum';
import { FloatingIconTitle } from '../enums/floatingicontitleenum';
import { FloatingIconUrl } from '../enums/floatingiconurlenum';
import { FloatingIconsService } from '../floating-icons.service';

export interface IFloattingIconBuilder {
    buildFloatingIcon(image: FloatingIconImage, title: FloatingIconTitle, url: FloatingIconUrl): FloatingIconsService;
    buildFloatingIconsNight(): FloatingIconsService[];
    buildFloatingIconsAfternoon(): FloatingIconsService[];
    buildFloatingIconsMorning(): FloatingIconsService[];
}
