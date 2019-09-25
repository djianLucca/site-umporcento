import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-page-top-row',
  templateUrl: './icon-page-top-row.component.html',
  styleUrls: ['./icon-page-top-row.component.scss']
})
export class IconPageTopRowComponent implements OnInit {
  logoUmporcento: string;
  logoUmporcentoAlt: string;
  logoUmporcentoId: string;
  lineWidth: string;
  svgHeight: number;
  elementX: number;
  elementYTransform: number;
  constructor() {
    this.logoUmporcento = '/assets/img/logo_umporcento.png';
    this.logoUmporcentoAlt = '1%';
    this.logoUmporcentoId = 'logoUmporcento';
    this.lineWidth = this.getLineWidthBasedOnScreenSize(window.outerWidth);


    this.svgHeight = 54;
    this.elementYTransform = this.svgHeight / 2;
    this.elementX = 55;
  }

  getLineWidthBasedOnScreenSize(screenWidth: number): string {
    if (screenWidth <= 1280) {
      return '93.08%';

    }
    return '95.75%';
  }
  ngOnInit() {
  }

}
