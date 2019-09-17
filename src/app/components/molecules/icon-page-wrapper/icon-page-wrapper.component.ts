import { Component, OnInit, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';

@Component({
  selector: 'app-icon-page-wrapper',
  templateUrl: './icon-page-wrapper.component.html',
  styleUrls: ['./icon-page-wrapper.component.scss']
})
export class IconPageWrapperComponent implements OnInit {
  @Input() pageLayout: PageSectionStatus | undefined;
  sectionId: string;
  logoUmporcento: string;
  logoUmporcentoAlt: string;
  menuIconName: string;
  menuIconId: string;
  constructor() {
    this.logoUmporcento = '/assets/img/logo_umporcento.png';
    this.menuIconName = 'bars';
    this.logoUmporcentoAlt = '1%';
    this.menuIconId = 'menuIcon';
    this.sectionId = 'IconWrapper';
  }

  ngOnInit() {
    this.sectionId += this.pageLayout;
    this.menuIconId += this.pageLayout;
  }

}
