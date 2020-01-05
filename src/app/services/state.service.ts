import { Injectable } from '@angular/core';
import { IState } from './interfaces/istate';
import { Page } from './enums/pageenum';
import { PageSectionStatus } from './enums/pageSectionStatusenum';
import { PageSectionBackground } from './enums/pageSectionbackgroundenum';
import { FloatingIconsService } from './floating-icons.service';
import { SocialIconsService } from './social-icons.service';
import { FloatingIconBuilderService } from './floating-icon-builder.service';
import { YearService } from './year.service';
import { TimelineItemService } from './timeline-item.service';
import { MenuGroupService } from './menu-group.service';

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
  menu: MenuGroupService[];
  floatingIconBuilder: FloatingIconBuilderService;
  timelineYears: YearService[];
  timelineItems: TimelineItemService[];
  isMenuOpen: boolean;

  constructor(now: number, menu: MenuGroupService[], socialIcons: SocialIconsService[]) {
    this.floatingIconBuilder = new FloatingIconBuilderService();
    this.page = this.getPageBasedOnTime(now);
    this.title = '[1%] Um por Cento';
    this.pageSection = this.getPageSectionBasedOnPage(this.page);
    this.pageBackground = this.getBgBasedOnPage(this.page);
    this.floatingIcons = this.getFloatingIconsBasedOnPage(this.page);
    this.menu = menu;
    this.socialIcons = socialIcons;
    this.timelineItems = [];
    this.timelineYears = [];
    this.isMenuOpen = false;
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
  getFloatingIconsBasedOnPage(page: Page): FloatingIconsService[] {
    switch (page) {
      case Page.Morning:
        return this.floatingIconBuilder.buildFloatingIconsMorning();
      case Page.Afternoon:
        return this.floatingIconBuilder.buildFloatingIconsAfternoon();
      default:
        return this.floatingIconBuilder.buildFloatingIconsNight();
    }
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
