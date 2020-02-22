import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/services/enums/pageenum';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { PageLocationHelperService } from 'src/app/services/helper/page-location-helper.service';
import { scaler } from 'src/app/services/animations/generalAnimations';

@Component({
  selector: 'app-talks-page-midle-row',
  templateUrl: './talks-page-midle-row.component.html',
  animations: [
    scaler
  ],
  styleUrls: ['./talks-page-midle-row.component.scss']
})
export class TalksPageMidleRowComponent implements OnInit {
  @Input() page: Page;
  @Input() pageSection: PageSectionStatus;
  @Input() menuAction!: () => void;
  @Input() openMenu: boolean = false;
  pageLocationHelper: PageLocationHelperService;
  
  constructor() {
    this.page = Page.Talks;
    this.pageSection = PageSectionStatus.Night;
    this.pageLocationHelper = new PageLocationHelperService();
   }

  ngOnInit() {
  }

}
