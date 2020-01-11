import { Component, OnInit, Input } from '@angular/core';
import { PageLocationHelperService } from 'src/app/services/helper/page-location-helper.service';
import { Page } from 'src/app/services/enums/pageenum';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { scaler } from 'src/app/services/animations/generalAnimations';

@Component({
  selector: 'app-contact-page-midle-row',
  templateUrl: './contact-page-midle-row.component.html',
  animations: [
    scaler
  ],
  styleUrls: ['./contact-page-midle-row.component.scss']
})
export class ContactPageMidleRowComponent implements OnInit {
  pageLocationHelper: PageLocationHelperService;
  @Input() page: Page;
  @Input() pageSection: PageSectionStatus;
  @Input() action = (email:string, text: string) => {};
  @Input() menuAction!: () => void;
  constructor() {
    this.pageLocationHelper = new PageLocationHelperService();
    this.page = Page.Contact;
    this.pageSection = PageSectionStatus.Night;
   }

  ngOnInit() {
  }

}
