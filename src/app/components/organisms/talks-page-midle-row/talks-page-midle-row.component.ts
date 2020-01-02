import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/services/enums/pageenum';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { PageLocationHelperService } from 'src/app/services/helper/page-location-helper.service';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-talks-page-midle-row',
  templateUrl: './talks-page-midle-row.component.html',
  styleUrls: ['./talks-page-midle-row.component.scss']
})
export class TalksPageMidleRowComponent implements OnInit {
  @Input() page: Page;
  @Input() pageSection: PageSectionStatus;
  pageLocationHelper: PageLocationHelperService;
  constructor() {
    this.page = Page.Talks;
    this.pageSection = PageSectionStatus.Night;
    this.pageLocationHelper = new PageLocationHelperService();
   }

  ngOnInit() {
  }

}
