import { Component, OnInit, Input } from '@angular/core';
import { SocialIconsService } from 'src/app/services/social-icons.service';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { Page } from 'src/app/services/enums/pageenum';

@Component({
  selector: 'app-network-page-content',
  templateUrl: './network-page-content.component.html',
  styleUrls: ['./network-page-content.component.scss']
})
export class NetworkPageContentComponent implements OnInit {
  @Input() socialIcons!: SocialIconsService[];
  @Input() pageSection: PageSectionStatus;
  @Input() page: Page;
  constructor() { 
    this.pageSection = PageSectionStatus.Night;
    this.page = Page.Network;
  }

  ngOnInit() {
  }

}