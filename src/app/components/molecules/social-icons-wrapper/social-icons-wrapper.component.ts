import { Component, OnInit, Input } from '@angular/core';
import { SocialIconsService } from 'src/app/services/social-icons.service';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';

@Component({
  selector: 'app-social-icons-wrapper',
  templateUrl: './social-icons-wrapper.component.html',
  styleUrls: ['./social-icons-wrapper.component.scss']
})
export class SocialIconsWrapperComponent implements OnInit {
  @Input() socialIcons: SocialIconsService[];
  @Input() pageStatus: PageSectionStatus;
  socialIconClass: string;
  constructor() {
    this.socialIcons = [];
    this.pageStatus = PageSectionStatus.Night;
    this.socialIconClass = 'social_icon social_icon';
  }

  ngOnInit() {
    this.socialIconClass += '_' + this.pageStatus;
  }

}
