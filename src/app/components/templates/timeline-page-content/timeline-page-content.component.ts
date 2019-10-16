import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/services/enums/pageenum';
import { SocialIconsService } from 'src/app/services/social-icons.service';

@Component({
  selector: 'app-timeline-page-content',
  templateUrl: './timeline-page-content.component.html',
  styleUrls: ['./timeline-page-content.component.scss']
})
export class TimelinePageContentComponent implements OnInit {
  @Input() pageSection!: Page;
  @Input() socialIcons: SocialIconsService[];
  constructor() { 
    this.socialIcons = [];
  }

  ngOnInit() {
  }

}
