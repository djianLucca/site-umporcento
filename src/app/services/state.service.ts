import { Injectable } from '@angular/core';
import { IState } from './interfaces/istate';
import { Page } from './enums/pageenum';
import { PageSectionStatus } from './enums/pageSectionStatusenum';
import { PageSectionBackground } from './enums/pageSectionbackgroundenum';
import { FloatingIconsService } from './floating-icons.service';
import { SocialIconsService } from './social-icons.service';
import { MenuService } from './menu.service';
import { FloatingIconImage } from './enums/floatingiconimageenum';
import { FloatingIconTitle } from './enums/floatingicontitleenum';
import { FloatingIconUrl } from './enums/floatingiconurlenum';

@Injectable({
  providedIn: 'root'
})
export class StateService implements IState {
  page: Page;
  title: string;
  pageSection: PageSectionStatus;
  pageBackground: PageSectionBackground;
  floatingIcons: FloatingIconsService[];
  socialIcons: SocialIconsService[];
  menu: MenuService;

  constructor(now: number, menu: MenuService, socialIcons: SocialIconsService[]) {
    this.page = this.getPageBasedOnTime(now);
    this.title = '[1%] Um por Cento';
    this.pageSection = this.getPageSectionBasedOnPage(this.page);
    this.pageBackground = this.getBgBasedOnPage(this.page);
    this.floatingIcons = this.getFloatingIconsBasedOnPage(this.page);
    this.menu = menu;
    this.socialIcons = socialIcons;
  }

  getPageSectionBasedOnPage(page: Page): PageSectionStatus {
    switch (page) {
      case Page.Morning:
        return PageSectionStatus.Morning;
        break;
      case Page.Afternoon:
        return PageSectionStatus.Afternoon;
        break;
      default:
        return PageSectionStatus.Night;
        break;
    }
  }

  getBgBasedOnPage(page: Page) {
    switch (page) {
      case Page.Morning:
        return PageSectionBackground.Morning;
        break;
      case Page.Afternoon:
        return PageSectionBackground.Afternoon;
        break;
      default:
        return PageSectionBackground.Night;
        break;
    }
  }
  getPageBasedOnTime(now: number): Page {
    if (this.isMorning(now)) {
      return Page.Morning;
    } else
    if (this.isAfternoon(now)) {
      return Page.Afternoon;
    }
    return Page.Night;
  }

  // TODO: Return this to default
  getFloatingIconsBasedOnPage(page: Page): FloatingIconsService[] {
    switch (page) {
      // case Page.Morning:
      //   return this.buildFloatingIconsMorning();
      //   break;
      // case Page.Afternoon:
      //   return this.buildFloatingIconsAfternoon();
      default:
        return this.buildFloatingIconsNight();
        break;
    }
  }

  buildFloatingIconsMorning(): FloatingIconsService[] {
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

  buildFloatingIconsAfternoon(): FloatingIconsService[] {
    return [
      this.buildFloatingIcon(
        FloatingIconImage.Timeline,
        FloatingIconTitle.Timeline,
        FloatingIconUrl.Timeline
      )
    ];
  }

  buildFloatingIconsNight(): FloatingIconsService[] {
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
  isMorning(now: number): boolean {
    if (now >= 5 && now <= 12) {
      return true;
    }
    return false;
  }

  isAfternoon(now: number): boolean {
    if (now >= 13 && now <= 18) {
      return true;
    }

    return false;
  }
}
