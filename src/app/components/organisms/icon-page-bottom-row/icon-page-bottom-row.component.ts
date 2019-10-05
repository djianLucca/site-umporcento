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
  svgWidthStart: string;
  svgWidthEnd: string;
  svgHeight: number;
  elementXStart: number;
  elementXend: number;
  elementYTransform: number;
  constructor() {
    this.lineWidthStart = this.getLineWidthBasedOnScreenSizeStart(window.outerWidth);
    this.lineWidthEnd = this.getLineWidthBasedOnScreenSizeEnd(window.outerWidth);
    this.svgWidthStart = this.getsvgWidthBasedOnScreenSizeStart(window.outerWidth);
    this.svgWidthEnd = this.getsvgWidthBasedOnScreenSizeEnd(window.outerWidth);
    this.svgHeight = 1;
    this.elementYTransform = 0;
    this.elementXStart = 28;
    this.elementXend = 21;
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
    const value = (73 * screenWidth) / 1542;
    return value;
  }


  getLineWidthBasedOnScreenSizeStart(screenWidth: number): string {
    const value = (500 * screenWidth) / 1542;
    return `${value}px`;
  }

  getsvgWidthBasedOnScreenSizeStart(screenWidth: number): string {
    const value = (573 * screenWidth) / 1542;
    return `${value}px`;
  }

  getLineWidthBasedOnScreenSizeEnd(screenWidth: number): string {
    const value = (577 * screenWidth) / 1542;
    return `${value}px`;
  }

  getsvgWidthBasedOnScreenSizeEnd(screenWidth: number): string {
    const value = (582 * screenWidth) / 1542;
    return `${value}px`;
  }

}
