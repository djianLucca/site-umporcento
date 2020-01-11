import { Component, OnInit, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { SocialIconsService } from 'src/app/services/social-icons.service';
import { PageLocationHelperService } from 'src/app/services/helper/page-location-helper.service';
import { scaler } from 'src/app/services/animations/generalAnimations';

@Component({
  selector: 'app-contact-page-content',
  templateUrl: './contact-page-content.component.html',
  animations: [
    scaler
  ],
  styleUrls: ['./contact-page-content.component.scss']
})
export class ContactPageContentComponent implements OnInit {
  @Input() pageSection: PageSectionStatus;
  @Input() socialIcons: SocialIconsService[];
  @Input() contactFormAction!: (email:string, text: string) => {};
  @Input() menuAction!: () => void;
  pageLocationHelper: PageLocationHelperService;
  
  constructor() { 
    this.pageSection = PageSectionStatus.Night;
    this.socialIcons = [];
    this.pageLocationHelper = new PageLocationHelperService();
  }

  ngOnInit() {
  }

}
