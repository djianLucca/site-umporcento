import { Component, OnInit, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';

@Component({
  selector: 'app-timeline-page-midle-row',
  templateUrl: './timeline-page-midle-row.component.html',
  styleUrls: ['./timeline-page-midle-row.component.scss']
})
export class TimelinePageMidleRowComponent implements OnInit {
  @Input() pageSection!: PageSectionStatus;
  constructor() { }

  ngOnInit() {
  }

}
