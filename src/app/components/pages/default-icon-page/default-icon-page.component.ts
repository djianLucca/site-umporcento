import { Component, OnInit, Input } from '@angular/core';
import { PageSectionBackground } from 'src/app/services/enums/pageSectionbackgroundenum';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { FloatingIconsService } from 'src/app/services/floating-icons.service';
import { SocialIconsService } from 'src/app/services/social-icons.service';

@Component({
  selector: 'app-default-icon-page',
  templateUrl: './default-icon-page.component.html',
  styleUrls: ['./default-icon-page.component.scss']
})
export class DefaultIconPageComponent implements OnInit {
  @Input() backgroundVideo: PageSectionBackground | undefined;
  @Input() pageSection: PageSectionStatus | undefined;
  @Input() floatingIcons: FloatingIconsService[];
  @Input() socialIcons: SocialIconsService[];
  @Input() changeSection!: (pageSection: PageSectionStatus) => void;

  constructor() {
    this.floatingIcons = [];
    this.socialIcons = [];
  }

  ngOnInit() {
  }

}
