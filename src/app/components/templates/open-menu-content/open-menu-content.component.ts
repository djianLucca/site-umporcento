import { Component, OnInit, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { SocialIconsService } from 'src/app/services/social-icons.service';
import { MenuGroupService } from 'src/app/services/menu-group.service';

@Component({
  selector: 'app-open-menu-content',
  templateUrl: './open-menu-content.component.html',
  styleUrls: ['./open-menu-content.component.scss']
})
export class OpenMenuContentComponent implements OnInit {
  @Input() pageSection!: PageSectionStatus;
  @Input() socialIcons!: SocialIconsService[];
  @Input() menuAction!: () => void;
  @Input() menuContent!: MenuGroupService[];
  constructor() { }

  ngOnInit() {
  }

}
