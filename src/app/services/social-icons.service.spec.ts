import { TestBed } from '@angular/core/testing';

import { SocialIconsService } from './social-icons.service';
import { SocialIconTitle } from './enums/socialicontitleenum ';
import { SocialIconUrl } from './enums/socialiconurlenum';
import { SocialIconClass } from './enums/socialiconclassenum';

describe('SocialIconsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocialIconsService =
      new SocialIconsService(
        SocialIconTitle.Email,
        SocialIconClass.Email,
        SocialIconUrl.Email);
    expect(service).toBeTruthy();
  });

  it('should be Facebook title', () => {
    const service: SocialIconsService =
      new SocialIconsService(
        SocialIconTitle.Facebook,
        SocialIconClass.Facebook,
        SocialIconUrl.Facebook);
    expect(service.title).toBe(SocialIconTitle.Facebook);
  });

  it('should be Vimeo css class', () => {
    const service: SocialIconsService =
      new SocialIconsService(
        SocialIconTitle.Vimeo,
        SocialIconClass.Vimeo,
        SocialIconUrl.Vimeo);
    expect(service.cssClass).toBe(SocialIconClass.Vimeo);
  });

  it('should be Instagram Url', () => {
    const service: SocialIconsService =
      new SocialIconsService(
        SocialIconTitle.Instagram,
        SocialIconClass.Instagram,
        SocialIconUrl.Instagram);
    expect(service.url).toBe(SocialIconUrl.Instagram);
  });
});
