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
      case Page.Guardians:
        return FloatingIconTitle.Guardians;
      case Page.Us:
        return FloatingIconTitle.Us;
    }
    return '';
  }

  public getImagesBasedOnPage(page: Page): string{
    switch (page) {
      case Page.Compass:
        return '/assets/img/bussola_2019.jpg';
      case Page.BrandManual:
        return '/assets/img/manual_2019.jpg';
      case Page.Magazine:
        return '/assets/img/dez_anos_2019.jpg';
      case Page.CultureGuide:
        return '/assets/img/guia_cultura_2019.jpg';
      case Page.Tree:
        return '/assets/img/arvore_2019.jpg';
    }
    return '';
  }
}
