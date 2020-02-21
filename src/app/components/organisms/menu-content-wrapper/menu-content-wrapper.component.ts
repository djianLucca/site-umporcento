import { Component, OnInit, Input } from '@angular/core';
import { MenuGroupService } from 'src/app/services/menu-group.service';
import { MenuTitlePositionService } from 'src/app/services/menu-title-position.service';
import { PaletPositionService } from 'src/app/services/palet-position.service';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';

@Component({
  selector: 'app-menu-content-wrapper',
  templateUrl: './menu-content-wrapper.component.html',
  styleUrls: ['./menu-content-wrapper.component.scss']
})
export class MenuContentWrapperComponent implements OnInit {
  @Input() menuContent!: MenuGroupService[];
  @Input() menuTitlePosition: MenuTitlePositionService;
  @Input() paletsPosition: PaletPositionService;
  @Input() pageSection!: PageSectionStatus;
  @Input() menuAction!: () => void;
  showLine: boolean;
  constructor() {
    this.showLine = false;

    this.menuTitlePosition = new MenuTitlePositionService(
      document.createElement('div'),
      document.createElement('div'),
      document.createElement('div')
    )
    this.paletsPosition = new PaletPositionService(
      document.createElement('div'),
      document.createElement('div'),
      document.createElement('div')
    )
   }

  ngOnInit() {
    this.paletsPosition = new PaletPositionService(
      document.querySelector('.palet__wrapper.morning'),
      document.querySelector('.palet__wrapper.afternoon'),
      document.querySelector('.palet__wrapper.night')
    )
  }

  showCanvas(show: boolean){
    this.showLine = show;
  }

  handleMenuPosition(position: MenuTitlePositionService){
    this.menuTitlePosition = position;
  }

}
