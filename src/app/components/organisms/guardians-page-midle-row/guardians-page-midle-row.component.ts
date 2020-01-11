import { Component, OnInit, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { Page } from 'src/app/services/enums/pageenum';
import { PageLocationHelperService } from 'src/app/services/helper/page-location-helper.service';
import { scaler } from 'src/app/services/animations/generalAnimations';

@Component({
  selector: 'app-guardians-page-midle-row',
  templateUrl: './guardians-page-midle-row.component.html',
  animations: [
    scaler
  ],
  styleUrls: ['./guardians-page-midle-row.component.scss']
})
export class GuardiansPageMidleRowComponent implements OnInit {

  @Input() pageSection: PageSectionStatus;
  @Input() page: Page;
  @Input() menuAction!: () => void;
  pageLocationHelper: PageLocationHelperService;
  
  constructor() { 
    this.pageSection = PageSectionStatus.Morning;
    this.page = Page.Guardians;
    this.pageLocationHelper = new PageLocationHelperService();
  }

  ngOnInit() {
  }

}
