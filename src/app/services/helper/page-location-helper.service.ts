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
      case Page.Network:
        return FloatingIconTitle.Network;
      case Page.Stamp:
        return FloatingIconTitle.Stamp;
      case Page.Talks:
        return FloatingIconTitle.Talks;
      case Page.Colab:
        return FloatingIconTitle.Colab;
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

  getRouterLinkPasedOnLabel(label: string){
    switch (label) {
      case 'bússola':
        return '/manha/bussola';
      case 'Manual da marca':
        return '/manha/manual-da-marca';
      case 'dez anos':
        return '/manha/dez-anos';
      case 'árvore':
            return '/manha/arvore'
      case 'guia de cultura':
        return '/manha/guia-de-cultura';
      case 'Guardiões':
        return '/manha/guardioes';
      case 'Linha do Tempo':
        return '/tarde/linha-do-tempo';
      case 'Contato':
        return '/noite/contato';
      case 'Nós':
        return '/noite/nos';
      case 'Rede':
        return '/noite/rede';
      case 'Selo':
        return '/noite/selo';
      case 'Palestras':
        return '/noite/palestras';
      case 'Co.lab':
        return '/noite/colab';
    }
    return '/';
  }
}
