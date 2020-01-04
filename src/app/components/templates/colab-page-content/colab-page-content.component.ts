import { Component, OnInit, Input } from '@angular/core';
import { SocialIconsService } from 'src/app/services/social-icons.service';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { Page } from 'src/app/services/enums/pageenum';

@Component({
  selector: 'app-colab-page-content',
  templateUrl: './colab-page-content.component.html',
  styleUrls: ['./colab-page-content.component.scss']
})
export class ColabPageContentComponent implements OnInit {
  @Input() socialIcons!: SocialIconsService[];
  @Input() pageSection: PageSectionStatus;
  @Input() page: Page;
  constructor() {
    this.pageSection = PageSectionStatus.Night;
    this.page = Page.Colab;
   }

  ngOnInit() {
  }

}
