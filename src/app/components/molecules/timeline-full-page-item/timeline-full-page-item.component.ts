import { Component, OnInit, Input } from '@angular/core';
import { TimelineItemService } from 'src/app/services/timeline-item.service';

@Component({
  selector: 'app-timeline-full-page-item',
  templateUrl: './timeline-full-page-item.component.html',
  styleUrls: ['./timeline-full-page-item.component.scss']
})
export class TimelineFullPageItemComponent implements OnInit {
  @Input() item!: TimelineItemService;
  @Input() close!: () => {};
  constructor() { }

  ngOnInit() {
  }

}
