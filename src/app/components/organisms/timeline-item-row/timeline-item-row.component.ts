import { Component, OnInit, Input } from '@angular/core';
import { TimelineItemService } from 'src/app/services/timeline-item.service';

@Component({
  selector: 'app-timeline-item-row',
  templateUrl: './timeline-item-row.component.html',
  styleUrls: ['./timeline-item-row.component.scss']
})
export class TimelineItemRowComponent implements OnInit {
  @Input() row!: TimelineItemService[][];
  constructor() { }

  ngOnInit() {
  }

}
