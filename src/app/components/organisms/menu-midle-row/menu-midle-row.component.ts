import { Component, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { MenuGroupService } from 'src/app/services/menu-group.service';
import { PaletPositionService } from 'src/app/services/palet-position.service';
import { MenuTitlePositionService } from 'src/app/services/menu-title-position.service';

@Component({
  selector: 'app-menu-midle-row',
  templateUrl: './menu-midle-row.component.html',
  styleUrls: ['./menu-midle-row.component.scss']
})
export class MenuMidleRowComponent {
  @Input() pageSection!: PageSectionStatus;
  @Input() menuContent!: MenuGroupService[];
  @Input() paletsPosition: PaletPositionService;
  @Input() menuTitlePosition: MenuTitlePositionService;
  @Input() menuAction!: () => void;

  constructor() {
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
}
