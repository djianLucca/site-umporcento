import { Component, OnInit, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { SocialIconsService } from 'src/app/services/social-icons.service';
import { Page } from 'src/app/services/enums/pageenum';

@Component({
  selector: 'app-guardians-page-content',
  templateUrl: './guardians-page-content.component.html',
  styleUrls: ['./guardians-page-content.component.scss']
})
export class GuardiansPageContentComponent implements OnInit {

  @Input() pageSection: PageSectionStatus;
  @Input() socialIcons: SocialIconsService[];
  @Input() page: Page;
  @Input() menuAction!: () => void;

  constructor() {
    this.pageSection = PageSectionStatus.Morning;
    this.socialIcons = [];
    this.page = Page.Guardians;
  }

  ngOnInit() {
  }

}
