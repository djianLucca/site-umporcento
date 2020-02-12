import { Component, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { MenuGroupService } from 'src/app/services/menu-group.service';
import { trigger, transition, style, group, animate } from '@angular/animations';
import { MenuTitlePositionService } from 'src/app/services/menu-title-position.service';
import { PaletPositionService } from 'src/app/services/palet-position.service';

@Component({
  selector: 'app-menu-midle-row',
  templateUrl: './menu-midle-row.component.html',
  animations:[
    trigger('Yscale', [
      transition(':enter', [
          style({ transform: 'scaleY(0)', opacity: 0 }),
          group([
            animate('280ms', style({ transform: 'scaleY(1)', opacity: 1 }))
          ])
      ])
    ])
  ],
  styleUrls: ['./menu-midle-row.component.scss']
})
export class MenuMidleRowComponent {
  @Input() pageSection!: PageSectionStatus;
  @Input() menuContent!: MenuGroupService[];
  @Input() menuAction!: () => void;
  @Input() paletsPosition: PaletPositionService;
  @Input() menuTitlePosition: MenuTitlePositionService;
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

  showCanvas(show: boolean){
    this.showLine = show;
  }

  handleMenuPosition(position: MenuTitlePositionService){
    this.menuTitlePosition = position;
  }
}
