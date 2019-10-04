import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';

@Component({
  selector: 'app-icon-page-top-row',
  templateUrl: './icon-page-top-row.component.html',
  styleUrls: ['./icon-page-top-row.component.scss']
})
export class IconPageTopRowComponent implements OnInit {
  @Input() pageSection!: PageSectionStatus;
  logoUmporcento: string;
  logoUmporcentoAlt: string;
  logoUmporcentoId: string;
  lineWidth: string;
  svgHeight: number;
  svgWidth: string;
  elementX: number;
  elementYTransform: number;
  constructor(private el: ElementRef) {
    this.logoUmporcento = '/assets/img/logo_umporcento.png';
    this.logoUmporcentoAlt = '1%';
    this.logoUmporcentoId = 'logoUmporcento';
    this.lineWidth = this.getLineWidthBasedOnScreenSize(window.outerWidth);
    this.svgWidth = this.getSvgWidthBasedOnScreenSize(window.outerWidth);
    this.svgHeight = 54;
    this.elementYTransform = this.svgHeight / 2;
    this.elementX = this.getElementXBasedOnScreenSize(window.outerWidth);

    console.log(this.el.nativeElement.offsetWidth);
  }

  getLineWidthBasedOnScreenSize(screenWidth: number): string {
    const value = (1430 * (screenWidth - 439)) / 1481;
    return `${value}px`;
  }

  getSvgWidthBasedOnScreenSize(screenWidth: number): string {
    const value = (1480 * (screenWidth - 439)) / 1481;
    return `${value}px`;
  }

  getElementXBasedOnScreenSize(screenWidth: number): number {
    const value = (55 * (screenWidth - 439)) / 1481;
    return value;
  }

  ngOnInit() {
  }

  changeLineColorBasedOnPageSection(): string {
    if (this.pageSection === PageSectionStatus.Morning) {
      return 'rgba(0,0,0, 1)';
    }
    return 'rgba(256,256,256, 1)';
  }

}
