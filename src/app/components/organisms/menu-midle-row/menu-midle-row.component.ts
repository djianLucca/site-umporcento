import { Component, OnInit, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { MenuGroupService } from 'src/app/services/menu-group.service';
import { trigger, transition, style, group, animate } from '@angular/animations';

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
export class MenuMidleRowComponent implements OnInit {
  @Input() pageSection!: PageSectionStatus;
  @Input() menuContent!: MenuGroupService[];
  @Input() menuAction!: () => void;

  constructor() { }

  ngOnInit() {
  }

  openGabw(){
    window.open('https://gabw.cc/', "_blank");
  }

}
