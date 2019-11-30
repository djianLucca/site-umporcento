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
    }
    return 'No Title';
  }

  getCompassTitle(): string {
    return 'Integração de corpo, alma e destino.';
  }

}
