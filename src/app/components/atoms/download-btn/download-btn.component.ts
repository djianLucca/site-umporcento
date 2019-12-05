import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/services/enums/pageenum';

@Component({
  selector: 'app-download-btn',
  templateUrl: './download-btn.component.html',
  styleUrls: ['./download-btn.component.scss']
})
export class DownloadBtnComponent implements OnInit {
  @Input() page!: Page;
  file: string;
  constructor() {
    this.file = '';
  }

  ngOnInit() {
    this.file = this.getFileBasedOnPage(this.page);
  }

  downloadFile() {
    if(this.file !== ''){
      window.open(this.file, '_blank');
    }
  }
  getDisabledClass(): string{
    if(this.page === Page.CultureGuide || this.page === Page.Tree){
      return 'disabled';
    }
    return '';
  }
  getFileBasedOnPage(page: Page): string{
    switch (page) {
      case Page.Compass:
        return '/assets/pdf/BUSSOLA_2019.pdf';
      case Page.BrandManual:
        return '/assets/pack/umporcento_ManualDaMarca.zip';
      case Page.Magazine:
        return '/assets/pdf/umporcento_dez_anos.pdf';
    }
    return '';
  }

}
