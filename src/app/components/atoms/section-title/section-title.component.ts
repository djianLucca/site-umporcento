import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/services/enums/pageenum';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent implements OnInit {
  @Input() page!: Page;

  constructor() { }

  ngOnInit() {
  }

  getThisSectionTitle(): string {
    switch (this.page) {
      case Page.Compass:
        return this.getCompassTitle();
      case Page.CultureGuide:
        return this.getCultureGuideTitle();
      case Page.BrandManual:
        return this.getBrandManualTitle();
      case Page.Tree:
        return this.getTreeTitle();
      case Page.Magazine:
        return this.getMagazine();
    }
    return 'No Title';
  }

  getCompassTitle(): string {
    return 'Integração de corpo, alma e destino.';
  }
  getCultureGuideTitle(): string{
    return 'Guia de Cultura';
  }
  getBrandManualTitle(): string{
    return 'Manual da Marca';
  }
  getTreeTitle(): string{
    return 'Árvore';
  }
  getStampTitle(): string{
    return 'Selo';
  }
  getMagazine(): string{
    return '10 anos';
  }

}
