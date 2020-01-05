import { Component, OnChanges, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';

@Component({
  selector: 'app-menu-icon',
  templateUrl: './menu-icon.component.html',
  styleUrls: ['./menu-icon.component.scss']
})
export class MenuIconComponent implements OnChanges {
  @Input() pageLayout!: PageSectionStatus;
  @Input() open: boolean;
  @Input() action!: () => void;
  
  menuIconName: string;
  menuIconId: string;
  menuIconClass: string;
  menuIconClassBuilt!: string;
  constructor() {
    this.menuIconName = 'bars';
    this.menuIconId = 'menuIcon';
    this.menuIconClass = 'menuIcon';
    this.open = false;
  }

  ngOnChanges() {
    this.menuIconClassBuilt = this.menuIconClass + this.pageLayout;
    if(this.open){
      this.menuIconName = 'times';
    }
  }
}
