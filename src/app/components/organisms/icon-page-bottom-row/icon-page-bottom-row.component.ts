import { Component, OnInit, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';

@Component({
  selector: 'app-icon-page-bottom-row',
  templateUrl: './icon-page-bottom-row.component.html',
  styleUrls: ['./icon-page-bottom-row.component.scss']
})
export class IconPageBottomRowComponent implements OnInit {
  @Input() pageSection!: PageSectionStatus;
  lineWidthStart: string;
  lineWidthEnd: string;
  svgHeight: number;
  elementXStart: number;
  elementXend: number;
  elementYTransform: number;
  constructor() {
    this.lineWidthStart = '88%';
    this.lineWidthEnd = this.getLineWidthBasedOnScreenSizeEnd(window.outerWidth);
    this.svgHeight = 1;
    this.elementYTransform = 0;
    this.elementXStart = 28;
    this.elementXend = this.getXEndBasedOnScreenSize(window.outerWidth);
  }

  ngOnInit() {
  }

  changeLineColorBasedOnPageSection(): string {
    if (this.pageSection === PageSectionStatus.Morning) {
      return 'rgba(0,0,0, 1)';
    }
    return 'rgba(256,256,256, 1)';
  }

  getXEndBasedOnScreenSize(screenWidth: number): number {
    if (screenWidth >= 3000) {
      return 150;

    }
    return 68;
  }

  getLineWidthBasedOnScreenSize(screenWidth: number): string {
    if (screenWidth <= 1280) {
      return '94%';

    }
    return '96.3%';
  }

  getLineWidthBasedOnScreenSizeEnd(screenWidth: number): string {
    if (screenWidth <= 1280) {
      return '94%';

    } else if (screenWidth >= 3000) {
      return '98.2%';
    }
    return '96.3%';
  }

}