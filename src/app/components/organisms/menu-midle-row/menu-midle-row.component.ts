import { Component, OnInit, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { MenuGroupService } from 'src/app/services/menu-group.service';

@Component({
  selector: 'app-menu-midle-row',
  templateUrl: './menu-midle-row.component.html',
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
