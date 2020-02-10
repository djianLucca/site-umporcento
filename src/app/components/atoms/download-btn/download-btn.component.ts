import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/services/enums/pageenum';

@Component({
  selector: 'app-download-btn',
  templateUrl: './download-btn.component.html',
  styleUrls: ['./download-btn.component.scss']
})
export class DownloadBtnComponent implements OnInit {
  @Input() page!: Page;
  @Input() colab: string;
  file: string;
  constructor() {
    this.file = '';
    this.colab = '';
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
      case Page.Colab:
        return this.getFileBasedOnColab();
      case Page.Guardians:
        return '/assets/img/MANIFESTO.jpg';
      case Page.Us:
        return '/assets/pdf/quem-somos.pdf';
    }
    return '';
  }
  getFileBasedOnColab(): string {
    switch (this.colab) {
      case 'ohohlele':
        return '/assets/pack/colab_ohohlele.zip';
      case 'pedroemcb':
        return '/assets/pack/colab_pedro_emcb.zip';
      case 'projetosomosinstantes':
        return '/assets/pdf/colab_somos_instantes.pdf';
      default:
        return '';
    }
  }

}
