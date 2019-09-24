import { Component, OnInit, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { FloatingIconsService } from 'src/app/services/floating-icons.service';

@Component({
  selector: 'app-icon-page-midle-row',
  templateUrl: './icon-page-midle-row.component.html',
  styleUrls: ['./icon-page-midle-row.component.scss']
})
export class IconPageMidleRowComponent implements OnInit {
  @Input() pageLayout: PageSectionStatus;
  @Input() floatingIcons: FloatingIconsService[];
  menuIconName: string;
  menuIconId: string;
  menuIconClass: string;
  imageSrc: string;
  constructor() {
    this.menuIconName = 'bars';
    this.menuIconId = 'menuIcon';
    this.menuIconClass = 'menuIcon';
    this.imageSrc = '/assets/img/selo.jpg';
    this.pageLayout = PageSectionStatus.Night;
    this.floatingIcons = [];
  }

  ngOnInit() {
    this.menuIconClass += this.pageLayout;
  }


}
