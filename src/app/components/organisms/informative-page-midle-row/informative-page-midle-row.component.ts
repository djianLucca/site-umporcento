import { Component, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { Page } from 'src/app/services/enums/pageenum';

@Component({
  selector: 'app-informative-page-midle-row',
  templateUrl: './informative-page-midle-row.component.html',
  styleUrls: ['./informative-page-midle-row.component.scss']
})
export class InformativePageMidleRowComponent {
  @Input() page!: Page;
  @Input() pageLayout!: PageSectionStatus;
  @Input() pageTitle: string;
  svgHeight: string;

  constructor() {
    this.svgHeight = this.getSvgHeightBasedOnScreenSize(window.outerWidth);
    this.pageTitle = 'No Title';
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

}
