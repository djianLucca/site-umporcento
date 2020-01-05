import { Component, Input, OnChanges } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { FloatingIconsService } from 'src/app/services/floating-icons.service';

@Component({
  selector: 'app-icon-page-midle-row',
  templateUrl: './icon-page-midle-row.component.html',
  styleUrls: ['./icon-page-midle-row.component.scss']
})
export class IconPageMidleRowComponent implements OnChanges {
  @Input() pageLayout: PageSectionStatus;
  @Input() floatingIcons: FloatingIconsService[];
  @Input() menuAction!: () => void;
  
  imageSrc: string;
  svgHeightEnd: string;
  svgHeightStart: string;
  elementXtransformEnd: number;
  svgWidthEnd: number;
  constructor() {
    this.imageSrc = '/assets/img/selo.jpg';
    this.pageLayout = PageSectionStatus.Night;
    this.floatingIcons = [];
    this.svgHeightEnd = this.getSvgHeightBasedOnScreenSizeEnd(window.outerWidth);
    this.svgWidthEnd = this.getsvgWidthEndBasedOnScreen(window.outerWidth);
    this.svgHeightStart = this.getSvgHeightBasedOnScreenSizeStart(window.outerWidth);
    this.elementXtransformEnd = this.getElementXtransformEndBasedOnScreen(window.outerWidth);
  }

  getElementXtransformEndBasedOnScreen(screenWidth: number): number {
    return (54 * screenWidth) / 1920;
  }
  getsvgWidthEndBasedOnScreen(screenWidth: number): number {
    return (55 * screenWidth) / 1920;
  }
  getSvgHeightBasedOnScreenSizeEnd(screenWidth: number): string {
    const value = (682 * screenWidth) / 1920;
    return `${value}px`;
  }
  getSvgHeightBasedOnScreenSizeStart(screenWidth: number): string {
    const value = (650 * screenWidth) / 1920;
    return `${value}px`;
  }

  ngOnChanges() {
  }

  changeLineColorBasedOnPageSection(): string {
    if (this.pageLayout === PageSectionStatus.Morning) {
      return 'rgba(0,0,0, 1)';
    }
    return 'rgba(256,256,256, 1)';
  }

}