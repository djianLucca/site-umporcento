import { Component, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { SocialIconsService } from 'src/app/services/social-icons.service';
import { MenuGroupService } from 'src/app/services/menu-group.service';
import { PaletPositionService } from 'src/app/services/palet-position.service';
import { MenuTitlePositionService } from 'src/app/services/menu-title-position.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-open-menu-content',
  templateUrl: './open-menu-content.component.html',
  animations:[trigger('scaleFadeIn', [
    transition(':enter', [
        style({ transform: 'scale(0,0)', opacity: 0 }),
        animate('500ms', style({ transform: 'scale(1,1)', opacity: 1 }))
        
    ]),
    transition(':leave', [
      animate('280ms', style({ transform: 'scale(0,0)', opacity: 0 }))
    ])
  ])], 
  styleUrls: ['./open-menu-content.component.scss']
})
export class OpenMenuContentComponent {
  @Input() pageSection!: PageSectionStatus;
  @Input() socialIcons!: SocialIconsService[];
  @Input() menuAction!: () => void;
  @Input() menuContent!: MenuGroupService[];
  @Input() paletPosition!: PaletPositionService;
  menuTitlePosition: MenuTitlePositionService;
  mustShowCanvas: boolean;
  constructor() { 
    this.mustShowCanvas = false;
    this.menuTitlePosition = new MenuTitlePositionService(
      document.createElement('div'),
      document.createElement('div'),
      document.createElement('div')
    )
    this.paletPosition = new PaletPositionService(
      document.createElement('div'),
      document.createElement('div'),
      document.createElement('div')
    )
  }

  showLine(show: boolean){
    this.mustShowCanvas = show;
  }

  setPaletPosition(position: PaletPositionService){
    this.paletPosition = position;
  }
  setMenuTitlePosition(position: MenuTitlePositionService){
    this.menuTitlePosition = position;
    console.log(position);
  }

}
