import { Component, OnInit, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { Page } from 'src/app/services/enums/pageenum';
import { PageLocationHelperService } from 'src/app/services/helper/page-location-helper.service';

@Component({
  selector: 'app-network-page-midle-row',
  templateUrl: './network-page-midle-row.component.html',
  styleUrls: ['./network-page-midle-row.component.scss']
})
export class NetworkPageMidleRowComponent implements OnInit {
  @Input() pageSection: PageSectionStatus;
  @Input() page: Page;
  pageLocationHelper: PageLocationHelperService;
  constructor() { 
    this.pageSection = PageSectionStatus.Night;
    this.page = Page.Network;
    this.pageLocationHelper = new PageLocationHelperService();
  }

  ngOnInit() {
  }

}