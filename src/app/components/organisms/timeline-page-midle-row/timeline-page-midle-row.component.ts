import { Component, OnInit, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { YearService } from 'src/app/services/year.service';
import { TimelineItemService } from 'src/app/services/timeline-item.service';

@Component({
  selector: 'app-timeline-page-midle-row',
  templateUrl: './timeline-page-midle-row.component.html',
  styleUrls: ['./timeline-page-midle-row.component.scss']
})
export class TimelinePageMidleRowComponent implements OnInit {
  @Input() pageSection!: PageSectionStatus;
  @Input() timelineYears!: YearService[];
  @Input() tinelineItems!: TimelineItemService[];
  constructor() { }

  ngOnInit() {
  }
}
