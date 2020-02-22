import { Component, OnChanges, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { bounceOutOnLeaveAnimation, bounceInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-menu-icon',
  templateUrl: './menu-icon.component.html',
  animations:[
    bounceOutOnLeaveAnimation({duration: 280}),
    bounceInOnEnterAnimation({duration: 280})
  ],
  styleUrls: ['./menu-icon.component.scss']
})
export class MenuIconComponent implements OnChanges {
  @Input() pageLayout!: PageSectionStatus;
  @Input() open: boolean;
  @Input() action!: () => void;
  @Input() openMenu: boolean;
  
  menuIconName: string;
  menuIconId: string;
  menuIconClass: string;
  menuIconClassBuilt!: string;
  constructor() {
    this.menuIconName = 'bars';
    this.menuIconId = 'menuIcon';
    this.menuIconClass = 'menuIcon';
    this.open = false;
    this.openMenu = false;
  }

  ngOnChanges() {
    this.menuIconClassBuilt = this.menuIconClass + this.pageLayout;
    if(this.open){
      this.menuIconName = 'times';
    }
  }
  menuAction(){
    setTimeout(()=>{ this.action(); }, 280);
  }
}
