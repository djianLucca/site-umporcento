import { Component, Input, OnInit } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { Page } from 'src/app/services/enums/pageenum';
import { FloatingIconTitle } from 'src/app/services/enums/floatingicontitleenum';

@Component({
  selector: 'app-informative-page-midle-row',
  templateUrl: './informative-page-midle-row.component.html',
  styleUrls: ['./informative-page-midle-row.component.scss']
})
export class InformativePageMidleRowComponent implements OnInit {
  @Input() page!: Page;
  @Input() pageLayout!: PageSectionStatus;
  @Input() pageTitle: string;
  sectionImage: string;
  svgHeight: string;

  constructor() {
    this.svgHeight = this.getSvgHeightBasedOnScreenSize(window.outerWidth);
    this.pageTitle = 'No Title';
    this.sectionImage = '';
  }
  ngOnInit() {
    this.sectionImage = this.getImagesBasedOnPage(this.page);
  }

  getSvgHeightBasedOnScreenSize(screenWidth: number): string {
    if (screenWidth >= 3000) {
      return '98.6%';
    }
    return '100%';
  }

  changeLineColorBasedOnPageSection(): string {
    if (this.pageLayout === PageSectionStatus.Morning) {
      return 'rgba(0,0,0, 1)';
    }
    return 'rgba(256,256,256, 1)';
  }

  getImagesBasedOnPage(page: Page): string{
    console.log(page);
    switch (page) {
      case Page.Compass:
        return '/assets/img/bussola_2019.jpg';
      case Page.BrandManual:
        return '/assets/img/manual_2019.jpg';
      case Page.Magazine:
        return '/assets/img/dez_anos_2019.jpg'
      case Page.CultureGuide:
        return '/assets/img/guia_cultura_2019.jpg'
      case Page.Tree:
        return '/assets/img/arvore_2019.jpg'
    }
    return '';
  }

  getPageLabelBasedOnPage(page: Page): string{
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
    }
    return '';
  }
}
