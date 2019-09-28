import { Component, OnChanges, Input } from '@angular/core';
import { SocialIconsService } from 'src/app/services/social-icons.service';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';

@Component({
  selector: 'app-social-icons-wrapper',
  templateUrl: './social-icons-wrapper.component.html',
  styleUrls: ['./social-icons-wrapper.component.scss']
})
export class SocialIconsWrapperComponent implements OnChanges {
  @Input() socialIcons: SocialIconsService[];
  @Input() pageStatus: PageSectionStatus;
  socialIconClass!: string;
  defaultClass: string;
  constructor() {
    this.socialIcons = [];
    this.pageStatus = PageSectionStatus.Night;
    this.defaultClass = 'social_icon social_icon';
  }

  ngOnChanges() {
    this.socialIconClass = this.defaultClass + '_' + this.pageStatus;
  }

}
