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
    window.open(this.file, '_blank');
  }

  getFileBasedOnPage(page: Page): string{
    switch (page) {
      case Page.Compass:
        return '/assets/pdf/BUUSSOLA_2019.pdf';
    }
    return '';
  }

}
