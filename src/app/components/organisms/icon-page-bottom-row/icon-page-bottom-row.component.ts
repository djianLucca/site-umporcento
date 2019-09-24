import { Component, OnInit, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';

@Component({
  selector: 'app-icon-page-bottom-row',
  templateUrl: './icon-page-bottom-row.component.html',
  styleUrls: ['./icon-page-bottom-row.component.scss']
})
export class IconPageBottomRowComponent implements OnInit {
  @Input() pageSection: PageSectionStatus | undefined;
  lineWidthStart: string;
  lineWidthEnd: string;
  svgHeight: number;
  elementXStart: number;
  elementXend: number;
  elementYTransform: number;
  constructor() {
    this.lineWidthStart = '88%';
    this.lineWidthEnd = this.getLineWidthBasedOnScreenSize(window.outerWidth);
    this.svgHeight = 1;
    this.elementYTransform = 0;
    this.elementXStart = 28;
    this.elementXend = 68;
  }

  ngOnInit() {
  }

  getLineWidthBasedOnScreenSize(screenWidth: number): string{
    if(screenWidth <= 1280){
      return '94%';

    }
    return '96.3%';
  }

}
