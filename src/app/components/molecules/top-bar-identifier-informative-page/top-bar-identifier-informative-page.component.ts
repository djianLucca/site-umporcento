import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/services/enums/pageenum';

@Component({
  selector: 'app-top-bar-identifier-informative-page',
  templateUrl: './top-bar-identifier-informative-page.component.html',
  styleUrls: ['./top-bar-identifier-informative-page.component.scss']
})
export class TopBarIdentifierInformativePageComponent implements OnInit {
  @Input() page!: Page;
  @Input()   getPageLabelBasedOnPage!: () => string;

  constructor() {}

  ngOnInit() {}

  getImageLogoBasedOnPage(page: Page): string {
    switch (page) {
      case Page.Compass:
        return 'assets/img/compass.svg';
      case Page.BrandManual:
        return 'assets/img/brand_manual.svg';
    }
    return 'assets/img/compass.svg';
  }
}
