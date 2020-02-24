import { Component, OnInit, Input } from '@angular/core';
import { PageLocationHelperService } from 'src/app/services/helper/page-location-helper.service';
import { Page } from 'src/app/services/enums/pageenum';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { scaler } from 'src/app/services/animations/generalAnimations';
import { SocialIconsService } from 'src/app/services/social-icons.service';
import { fadeInLeftOnEnterAnimation, fadeInDownOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-contact-page-midle-row',
  templateUrl: './contact-page-midle-row.component.html',
  animations: [
    scaler,
    fadeInLeftOnEnterAnimation({ translate: '40%' }),
    fadeInDownOnEnterAnimation({ translate: '40%', delay: 100 })
  ],
  styleUrls: ['./contact-page-midle-row.component.scss']
})
export class ContactPageMidleRowComponent implements OnInit {
  pageLocationHelper: PageLocationHelperService;
  @Input() page: Page;
  @Input() pageSection: PageSectionStatus;
  @Input() action = (email:string, text: string) => {};
  @Input() menuAction!: () => void;
  @Input() openMenu: boolean;
  @Input() socialIcons!: SocialIconsService[];
  showContactForm: boolean;
  
  constructor() {
    this.openMenu = false;
    this.pageLocationHelper = new PageLocationHelperService();
    this.page = Page.Contact;
    this.pageSection = PageSectionStatus.Night;
    this.showContactForm = false;
   }

  ngOnInit() {
  }
  toggleShowContact(status: boolean){
    this.showContactForm = status;
  }

}
