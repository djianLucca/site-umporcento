import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/services/enums/pageenum';
import { SocialIconsService } from 'src/app/services/social-icons.service';
import { YearService } from 'src/app/services/year.service';
import { TimelineItemService } from 'src/app/services/timeline-item.service';
import { scaler } from 'src/app/services/animations/generalAnimations';

@Component({
  selector: 'app-timeline-page-content',
  templateUrl: './timeline-page-content.component.html',
  animations: [
    scaler
  ],
  styleUrls: ['./timeline-page-content.component.scss']
})
export class TimelinePageContentComponent implements OnInit {
  @Input() pageSection!: Page;
  @Input() socialIcons: SocialIconsService[];
  @Input() timelineYears!: YearService[];
  @Input() tinelineItems!: TimelineItemService[];
  @Input() updateApi!: () => {};
  @Input() menuAction!: () => void;
  constructor() { 
    this.socialIcons = [];
  }

  ngOnInit() {
    this.updateApi();
  }

}
