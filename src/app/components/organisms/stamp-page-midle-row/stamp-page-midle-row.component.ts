import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/services/enums/pageenum';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { PageLocationHelperService } from 'src/app/services/helper/page-location-helper.service';

@Component({
  selector: 'app-stamp-page-midle-row',
  templateUrl: './stamp-page-midle-row.component.html',
  styleUrls: ['./stamp-page-midle-row.component.scss']
})
export class StampPageMidleRowComponent implements OnInit {
  
  @Input() page: Page;
  @Input() pageSection: PageSectionStatus;
  pageLocationHelper: PageLocationHelperService;

  constructor() {
    this.page = Page.Stamp;
    this.pageSection = PageSectionStatus.Night;
    this.pageLocationHelper = new PageLocationHelperService();
   }

  ngOnInit() {
  }

}
