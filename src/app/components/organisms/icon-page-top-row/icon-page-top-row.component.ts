import { Component, OnInit, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { SiteWideSearchService } from 'src/app/services/site-wide-search.service';
import { SearchResultsService } from 'src/app/services/search-results.service';

@Component({
  selector: 'app-icon-page-top-row',
  templateUrl: './icon-page-top-row.component.html',
  styleUrls: ['./icon-page-top-row.component.scss']
})
export class IconPageTopRowComponent implements OnInit {
  @Input() pageSection!: PageSectionStatus;
  logoUmporcento: string;
  logoUmporcentoAlt: string;
  logoUmporcentoId: string;
  lineWidth: string;
  svgHeight: number;
  elementYTransform: number;
  searchService: SiteWideSearchService;
  searchResults: SearchResultsService[] | undefined;

  constructor() {
    this.logoUmporcento = '/assets/img/umporcento_logo.svg';
    this.logoUmporcentoAlt = '1%';
    this.logoUmporcentoId = 'logoUmporcento';
    this.lineWidth = '100%';
    this.svgHeight = 54;
    this.elementYTransform = this.svgHeight / 2;
    this.searchService = new SiteWideSearchService();
  }

  ngOnInit() {
  }

  changeLineColorBasedOnPageSection(): string {
    if (this.pageSection === PageSectionStatus.Morning) {
      return 'rgba(0,0,0, 1)';
    }
    return 'rgba(256,256,256, 1)';
  }

  searchSite(text: string){
    this.searchResults = this.searchService.searchPage(text);
  }

}
