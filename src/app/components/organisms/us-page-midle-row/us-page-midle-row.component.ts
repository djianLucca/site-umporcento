import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/services/enums/pageenum';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { PageLocationHelperService } from 'src/app/services/helper/page-location-helper.service';
import { scaler } from 'src/app/services/animations/generalAnimations';

@Component({
  selector: 'app-us-page-midle-row',
  templateUrl: './us-page-midle-row.component.html',
  animations: [
    scaler
  ],
  styleUrls: ['./us-page-midle-row.component.scss']
})
export class UsPageMidleRowComponent implements OnInit {
  
  @Input() page: Page;
  @Input() pageSection: PageSectionStatus;
  @Input() menuAction!: () => void;
  pageLocationHelper: PageLocationHelperService;

  constructor() { 
    this.page = Page.Us;
    this.pageSection = PageSectionStatus.Night;
    this.pageLocationHelper = new PageLocationHelperService();
  }

  ngOnInit() {
  }

}
