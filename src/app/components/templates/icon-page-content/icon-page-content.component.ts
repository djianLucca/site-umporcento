import { Component, OnInit, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { FloatingIconsService } from 'src/app/services/floating-icons.service';
import { SocialIconsService } from 'src/app/services/social-icons.service';
import { slider } from 'src/app/services/animations/generalAnimations';

@Component({
  selector: 'app-icon-page-content',
  templateUrl: './icon-page-content.component.html',
  styleUrls: ['./icon-page-content.component.scss'],
  animations: [
    slider
  ]
})
export class IconPageContentComponent implements OnInit {

  @Input() pageSection!: PageSectionStatus;
  @Input() socialIcons: SocialIconsService[];
  @Input() floatingIcons: FloatingIconsService[];
  @Input() menuAction!: () => void;
  sectionId: string;

  constructor() {
    this.sectionId = 'IconWrapper';
    this.floatingIcons = [];
    this.socialIcons = [];
   }

  ngOnInit() {
  }

}
