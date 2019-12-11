import { Component, OnInit, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { SocialIconsService } from 'src/app/services/social-icons.service';
import { PageLocationHelperService } from 'src/app/services/helper/page-location-helper.service';

@Component({
  selector: 'app-contact-page-content',
  templateUrl: './contact-page-content.component.html',
  styleUrls: ['./contact-page-content.component.scss']
})
export class ContactPageContentComponent implements OnInit {
  @Input() pageSection: PageSectionStatus;
  @Input() socialIcons: SocialIconsService[]; 
  pageLocationHelper: PageLocationHelperService;
  constructor() { 
    this.pageSection = PageSectionStatus.Night;
    this.socialIcons = [];
    this.pageLocationHelper = new PageLocationHelperService();
  }

  ngOnInit() {
  }

}
