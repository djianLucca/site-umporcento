import { Component, OnInit, Input } from '@angular/core';
import { SocialIconsService } from 'src/app/services/social-icons.service';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { Page } from 'src/app/services/enums/pageenum';
import { scaler } from 'src/app/services/animations/generalAnimations';

@Component({
  selector: 'app-network-page-content',
  templateUrl: './network-page-content.component.html',
  animations: [
    scaler
  ],
  styleUrls: ['./network-page-content.component.scss']
})
export class NetworkPageContentComponent implements OnInit {
  @Input() socialIcons!: SocialIconsService[];
  @Input() pageSection: PageSectionStatus;
  @Input() page: Page;
  @Input() menuAction!: () => void;
  
  constructor() { 
    this.pageSection = PageSectionStatus.Night;
    this.page = Page.Network;
  }

  ngOnInit() {
  }

}
