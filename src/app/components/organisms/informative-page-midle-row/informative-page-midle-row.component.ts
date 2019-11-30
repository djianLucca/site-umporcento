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
  imageObjectsSlider: Object[]
  svgHeight: string;

  constructor() {
    this.svgHeight = this.getSvgHeightBasedOnScreenSize(window.outerWidth);
    this.pageTitle = 'No Title';
    this.imageObjectsSlider = [];
  }
  ngOnInit() {
    this.imageObjectsSlider = this.getImagesBasedOnPage(this.page);
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

  getImagesBasedOnPage(page: Page): Array<Object>{
    switch (page) {
      case Page.Compass:
        return this.getCompassImages();
    }

    return [];
  }

  getPageLabelBasedOnPage(page: Page): string{
    switch (page) {
      case Page.Compass:
        return FloatingIconTitle.Compass;
    }
    return '';
  }

  getThisSectionTitle(): string {
    switch (this.page) {
      case Page.Compass:
        return this.getCompassTitle();
    }
    return 'No Title';
  }
  getCompassTitle(): string {
    return 'Integração de corpo, alma e destino.';
  }
  getCompassImages(): Array<Object>{
    return [{
      image: 'assets/img/image_1.jpg',
      thumbImage: 'assets/img/image_1.jpg',
      alt: 'alt of image',
    }, {
      image: 'assets/img/image_2.jpg',
      thumbImage: 'assets/img/image_2.jpg',
      alt: 'Image alt'
    }, {
      image: 'assets/img/image_3.jpg',
      thumbImage: 'assets/img/image_3.jpg',
      alt: 'Image alt'
    }
    ];
  }
}
