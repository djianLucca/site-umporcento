import { Component, Input, OnInit } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { Page } from 'src/app/services/enums/pageenum';
import { PageLocationHelperService } from 'src/app/services/helper/page-location-helper.service';
import { scaler } from 'src/app/services/animations/generalAnimations';

@Component({
  selector: 'app-informative-page-midle-row',
  templateUrl: './informative-page-midle-row.component.html',
  animations: [
    scaler
  ],
  styleUrls: ['./informative-page-midle-row.component.scss']
})
export class InformativePageMidleRowComponent implements OnInit {
  @Input() page!: Page;
  @Input() pageLayout!: PageSectionStatus;
  @Input() pageTitle: string;
  @Input() menuAction!: () => void;
  sectionImage: string;
  svgHeight: string;
  pageLocationHelper: PageLocationHelperService;

  constructor() {
    this.svgHeight = this.getSvgHeightBasedOnScreenSize(window.outerWidth);
    this.pageTitle = 'No Title';
    this.sectionImage = '';
    this.pageLocationHelper = new PageLocationHelperService();
  }
  ngOnInit() {
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
