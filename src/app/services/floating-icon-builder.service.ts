import { Injectable } from '@angular/core';
import { IFloattingIconBuilder } from './interfaces/ifloatting-icon-builder';
import { FloatingIconsService } from './floating-icons.service';
import { FloatingIconImage } from './enums/floatingiconimageenum';
import { FloatingIconTitle } from './enums/floatingicontitleenum';
import { FloatingIconUrl } from './enums/floatingiconurlenum';

@Injectable({
  providedIn: 'root'
})
export class FloatingIconBuilderService implements IFloattingIconBuilder {

  constructor() { }

  public buildFloatingIconsMorning(): FloatingIconsService[] {
    return [
      this.buildFloatingIcon(
        FloatingIconImage.CultureGuide,
        FloatingIconTitle.CultureGuide,
        FloatingIconUrl.CultureGuide
      ),
      this.buildFloatingIcon(
        FloatingIconImage.BrandManual,
        FloatingIconTitle.BrandManual,
        FloatingIconUrl.BrandManual
      ),
      this.buildFloatingIcon(
        FloatingIconImage.Compass,
        FloatingIconTitle.Compass,
        FloatingIconUrl.Compass
      ),
      this.buildFloatingIcon(
        FloatingIconImage.Tree,
        FloatingIconTitle.Tree,
        FloatingIconUrl.Tree
      ),
      this.buildFloatingIcon(
        FloatingIconImage.Guardians,
        FloatingIconTitle.Guardians,
        FloatingIconUrl.Guardians
      ),
      this.buildFloatingIcon(
        FloatingIconImage.Magazine,
        FloatingIconTitle.Magazine,
        FloatingIconUrl.Magazine
      )
    ];
  }

  public buildFloatingIconsAfternoon(): FloatingIconsService[] {
    return [
      this.buildFloatingIcon(
        FloatingIconImage.Timeline,
        FloatingIconTitle.Timeline,
        FloatingIconUrl.Timeline
      )
    ];
  }

  public buildFloatingIconsNight(): FloatingIconsService[] {
    return [
      this.buildFloatingIcon(
        FloatingIconImage.Colab,
        FloatingIconTitle.Colab,
        FloatingIconUrl.Colab
      ),
      this.buildFloatingIcon(
        FloatingIconImage.Us,
        FloatingIconTitle.Us,
        FloatingIconUrl.Us
      ),
      this.buildFloatingIcon(
        FloatingIconImage.Stamp,
        FloatingIconTitle.Stamp,
        FloatingIconUrl.Stamp
      ),
      this.buildFloatingIcon(
        FloatingIconImage.Network,
        FloatingIconTitle.Network,
        FloatingIconUrl.Network
      ),
      this.buildFloatingIcon(
        FloatingIconImage.Talks,
        FloatingIconTitle.Talks,
        FloatingIconUrl.Talks
      ),
      this.buildFloatingIcon(
        FloatingIconImage.Gabw,
        FloatingIconTitle.Gabw,
        FloatingIconUrl.Gabw
      )
    ];
  }

  buildFloatingIcon(image: FloatingIconImage, title: FloatingIconTitle, url: FloatingIconUrl): FloatingIconsService {
    return new FloatingIconsService(
      image,
      title,
      url
    );
  }
}
