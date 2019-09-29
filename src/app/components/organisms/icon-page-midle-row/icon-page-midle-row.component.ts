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
  imageSrc: string;
  svgHeight: string;
  constructor() {
    this.imageSrc = '/assets/img/selo.jpg';
    this.pageLayout = PageSectionStatus.Night;
    this.floatingIcons = [];
    this.svgHeight = this.getSvgHeightBasedOnScreenSize(window.outerWidth);
  }

  getSvgHeightBasedOnScreenSize(screenWidth: number): string {
    if (screenWidth >= 3000) {
      return '98.6%';
    }
    return '100%';
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