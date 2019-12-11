import { Injectable } from '@angular/core';
import { Page } from '../enums/pageenum';
import { FloatingIconTitle } from '../enums/floatingicontitleenum';
import { IPageLocationHelper } from '../interfaces/ipage-location-helper';

@Injectable({
  providedIn: 'root'
})
export class PageLocationHelperService implements IPageLocationHelper{

  constructor() { }

  public getPageLabelBasedOnPage(page: Page): string {
    switch (page) {
      case Page.Compass:
        return FloatingIconTitle.Compass;
      case Page.BrandManual:
        return FloatingIconTitle.BrandManual;
      case Page.Magazine:
        return  FloatingIconTitle.Magazine;
      case Page.CultureGuide:
        return FloatingIconTitle.CultureGuide;
      case Page.Tree:
        return FloatingIconTitle.Tree;
      case Page.Contact:
        return FloatingIconTitle.Contact
    }
    return '';
  }
}
