import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/services/enums/pageenum';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent implements OnInit {
  pdf: string;
  @Input() page: Page;
  constructor() {
    this.pdf = '';
    this.page = Page.Us;
   }

  ngOnInit() {
  }

  getPdfBasedOnPage(){
    switch (this.page) {
      case Page.Compass:
        return '/assets/pdf/BUSSOLA_2019.pdf';
      case Page.BrandManual:
        return '/assets/pack/umporcento_ManualDaMarca.zip';
      case Page.Magazine:
        return '/assets/pdf/umporcento_dez_anos.pdf';
      default:
        return '';
    }
  }

}
