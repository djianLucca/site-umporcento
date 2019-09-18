import { Component, OnInit, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';

@Component({
  selector: 'app-icon-page-midle-row',
  templateUrl: './icon-page-midle-row.component.html',
  styleUrls: ['./icon-page-midle-row.component.scss']
})
export class IconPageMidleRowComponent implements OnInit {
  @Input() pageLayout: PageSectionStatus | undefined;
  menuIconName: string;
  menuIconId: string;
  menuIconClass: string;
  constructor() {
    this.menuIconName = 'bars';
    this.menuIconId = 'menuIcon';
    this.menuIconClass = 'menuIcon';
  }

  ngOnInit() {
    this.menuIconClass += this.pageLayout;
  }

}
