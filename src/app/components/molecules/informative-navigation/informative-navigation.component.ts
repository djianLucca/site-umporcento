import { Component, OnInit, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';

@Component({
  selector: 'app-informative-navigation',
  templateUrl: './informative-navigation.component.html',
  styleUrls: ['./informative-navigation.component.scss']
})
export class InformativeNavigationComponent implements OnInit {
  @Input() title!: string;
  @Input() pageSection: PageSectionStatus;
  constructor() {
    this.pageSection = PageSectionStatus.Night;
  }

  ngOnInit() {
  }

  getRouterLinkBasedOnPageSection(pageSection: PageSectionStatus): string{
    switch (pageSection) {
      case PageSectionStatus.Morning:
        return '/manha'
      case PageSectionStatus.Afternoon:
          return '/tarde'
    }

    return '/noite';
  }
}
