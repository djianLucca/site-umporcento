import { TestBed } from '@angular/core/testing';

import { StateService } from './state.service';
import { MenuService } from './menu.service';
import { SocialIconsService } from './social-icons.service';
import { Page } from './enums/pageenum';
import { PageSectionBackground } from './enums/pageSectionbackgroundenum';
import { PageSectionStatus } from './enums/pageSectionStatusenum';

describe('StateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  let menuServiceSpy: jasmine.SpyObj<MenuService>;
  let socialIconsSpy: jasmine.SpyObj<SocialIconsService>;

  it('should be created', () => {
    menuServiceSpy = jasmine.createSpyObj('MenuService', ['title', 'url']);
    socialIconsSpy = jasmine.createSpyObj('SocialIconsService', ['title', 'cssClass', 'url']);
    const service: StateService = new StateService(10, menuServiceSpy, [socialIconsSpy]);
    expect(service).toBeTruthy();
  });

  it('10AM should be morning', () => {
    menuServiceSpy = jasmine.createSpyObj('MenuService', ['title', 'url']);
    socialIconsSpy = jasmine.createSpyObj('SocialIconsService', ['title', 'cssClass', 'url']);
    const service: StateService = new StateService(10, menuServiceSpy, [socialIconsSpy]);
    expect(service.isMorning(10)).toBe(true);
  });
  it('15PM should be Afternoon', () => {
    menuServiceSpy = jasmine.createSpyObj('MenuService', ['title', 'url']);
    socialIconsSpy = jasmine.createSpyObj('SocialIconsService', ['title', 'cssClass', 'url']);
    const service: StateService = new StateService(10, menuServiceSpy, [socialIconsSpy]);
    expect(service.isAfternoon(15)).toBe(true);
  });
  it('3AM should be Night', () => {
    menuServiceSpy = jasmine.createSpyObj('MenuService', ['title', 'url']);
    socialIconsSpy = jasmine.createSpyObj('SocialIconsService', ['title', 'cssClass', 'url']);
    const service: StateService = new StateService(10, menuServiceSpy, [socialIconsSpy]);
    expect([service.isMorning(3), service.isAfternoon(3)]).toEqual([false, false]);
  });
  it('at 4AM page should be night', () => {
    menuServiceSpy = jasmine.createSpyObj('MenuService', ['title', 'url']);
    socialIconsSpy = jasmine.createSpyObj('SocialIconsService', ['title', 'cssClass', 'url']);
    const service: StateService = new StateService(10, menuServiceSpy, [socialIconsSpy]);
    expect(service.getPageBasedOnTime(4)).toBe(Page.Night);
  });
  it('at Afternoon Page Background should be Afternoon', () => {
    menuServiceSpy = jasmine.createSpyObj('MenuService', ['title', 'url']);
    socialIconsSpy = jasmine.createSpyObj('SocialIconsService', ['title', 'cssClass', 'url']);
    const service: StateService = new StateService(10, menuServiceSpy, [socialIconsSpy]);
    expect(service.getBgBasedOnPage(Page.Afternoon)).toBe(PageSectionBackground.Afternoon);
  });
  it('at morning Page Section should be morning', () => {
    menuServiceSpy = jasmine.createSpyObj('MenuService', ['title', 'url']);
    socialIconsSpy = jasmine.createSpyObj('SocialIconsService', ['title', 'cssClass', 'url']);
    const service: StateService = new StateService(10, menuServiceSpy, [socialIconsSpy]);
    expect(service.getPageSectionBasedOnPage(Page.Morning)).toBe(PageSectionStatus.Morning);
  });
  it('The page value should be morning', () => {
    menuServiceSpy = jasmine.createSpyObj('MenuService', ['title', 'url']);
    socialIconsSpy = jasmine.createSpyObj('SocialIconsService', ['title', 'cssClass', 'url']);
    const service: StateService = new StateService(12, menuServiceSpy, [socialIconsSpy]);
    expect(service.page).toBe(Page.Morning);
  });
});
