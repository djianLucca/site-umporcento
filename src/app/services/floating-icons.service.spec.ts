import { TestBed } from '@angular/core/testing';

import { FloatingIconsService } from './floating-icons.service';
import { FloatingIconImage } from './enums/floatingiconimageenum';
import { FloatingIconTitle } from './enums/floatingicontitleenum';
import { FloatingIconUrl } from './enums/floatingiconurlenum';

describe('FloatingIconsService', () => {
  beforeEach(() => TestBed.configureTestingModule({ providers: [FloatingIconsService] }));

  it('should be created', () => {
    const service: FloatingIconsService =
    new FloatingIconsService(
      FloatingIconImage.BrandManual,
      FloatingIconTitle.BrandManual,
      FloatingIconUrl.BrandManual);

    expect(service).toBeTruthy();
  });

  it('should be brand manual image', () =>{
    const service: FloatingIconsService =
    new FloatingIconsService(
      FloatingIconImage.BrandManual,
      FloatingIconTitle.BrandManual,
      FloatingIconUrl.BrandManual);

    expect(service.image).toBe(FloatingIconImage.BrandManual)

  });

  it('should be Colab Title', () =>{
    const service: FloatingIconsService =
    new FloatingIconsService(
      FloatingIconImage.Colab,
      FloatingIconTitle.Colab,
      FloatingIconUrl.Colab);

    expect(service.title).toBe(FloatingIconTitle.Colab)

  });

  it('should be compass Url', () =>{
    const service: FloatingIconsService =
    new FloatingIconsService(
      FloatingIconImage.Compass,
      FloatingIconTitle.Compass,
      FloatingIconUrl.Compass);

    expect(service.url).toBe(FloatingIconUrl.Compass)

  });

  it('should set Tree  Url', () =>{
    const service: FloatingIconsService =
    new FloatingIconsService(
      FloatingIconImage.Compass,
      FloatingIconTitle.Compass,
      FloatingIconUrl.Compass);

      service.image = FloatingIconImage.Tree

    expect(service.image).toBe(FloatingIconImage.Tree)

  });

});
