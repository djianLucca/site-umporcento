import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/services/enums/pageenum';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent implements OnInit {
  @Input() page!: Page;
  @Input() class: string;

  constructor() {
    this.class = '';
   }

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
      case Page.Stamp:
        return this.getStampTitle();
      case Page.Colab:{
        return this.getColabTitle();
      }
    }
    return 'No Title';
  }

  getCompassTitle(): string {
    return 'a.cor.dar, dar cor ao mundo.';
  }
  getCultureGuideTitle(): string{
    return 'frequência, energia, matéria.';
  }
  getBrandManualTitle(): string{
    return 'persistencia, audácia e amor.';
  }
  getTreeTitle(): string{
    return 'biomimética a serviço do fluir';
  }
  getStampTitle(): string{
    return 'a chave.';
  }
  getMagazine(): string{
    return '12x12=144';
  }
  getColabTitle(): string{
    return 'co.criar para lab.oratoriar';
  }

}
