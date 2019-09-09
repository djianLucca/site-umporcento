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
});
