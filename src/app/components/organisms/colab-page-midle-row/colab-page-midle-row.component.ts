import { Component, OnInit, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { Page } from 'src/app/services/enums/pageenum';
import { PageLocationHelperService } from 'src/app/services/helper/page-location-helper.service';
import { scaler } from 'src/app/services/animations/generalAnimations';

@Component({
  selector: 'app-colab-page-midle-row',
  templateUrl: './colab-page-midle-row.component.html',
  animations: [
    scaler
  ],
  styleUrls: ['./colab-page-midle-row.component.scss']
})
export class ColabPageMidleRowComponent implements OnInit {
  @Input() pageSection: PageSectionStatus;
  @Input() page: Page;
  @Input() menuAction!: () => void;
  pageLocationHelper: PageLocationHelperService;
  activeColab: string;
  constructor() { 
    this.pageSection = PageSectionStatus.Night;
    this.page = Page.Colab;
    this.pageLocationHelper = new PageLocationHelperService();
    this.activeColab = 'ohohlele';
  }

  ngOnInit() {
  }
  changeArtSlider(colab: string){
    this.activeColab = colab;
  }
}
