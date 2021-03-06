import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/services/enums/pageenum';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';

@Component({
  selector: 'app-top-bar-identifier-informative-page',
  templateUrl: './top-bar-identifier-informative-page.component.html',
  styleUrls: ['./top-bar-identifier-informative-page.component.scss']
})
export class TopBarIdentifierInformativePageComponent implements OnInit {
  @Input() page!: Page;
  @Input() getPageLabelBasedOnPage!: (page: string) => string;
  @Input() pageLayout: PageSectionStatus;

  constructor() {
    this.pageLayout = PageSectionStatus.Morning;
  }

  ngOnInit() {
  }

  getImageLogoBasedOnPage(page: Page): string {
    switch (page) {
      case Page.Compass:
        return 'assets/img/compass.svg';
      case Page.BrandManual:
        return 'assets/img/brand_manual.svg';
      case Page.Magazine:
            return 'assets/img/magazine.svg';
      case Page.CultureGuide:
            return 'assets/img/culture_guide.svg';
      case Page.Tree:
        return 'assets/img/tree.svg';
      case Page.Contact:
        return 'assets/img/contact.svg';
      case Page.Guardians:
        return 'assets/img/guardians.svg';
      case Page.Us:
        return 'assets/img/us.svg';
      case Page.Network:
        return 'assets/img/network.svg';
      case Page.Stamp:
        return 'assets/img/stamp.svg';
      case Page.Talks:
        return 'assets/img/talk.svg';
      case Page.Colab:
        return 'assets/img/colab.svg';
    }
    return '';
  }
}
