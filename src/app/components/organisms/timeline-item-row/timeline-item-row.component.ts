import { Component, OnInit, Input } from '@angular/core';
import { TimelineItemService } from 'src/app/services/timeline-item.service';
import { borderFader } from 'src/app/services/animations/generalAnimations';

@Component({
  selector: 'app-timeline-item-row',
  templateUrl: './timeline-item-row.component.html',
  animations: [
    borderFader
  ],
  styleUrls: ['./timeline-item-row.component.scss']
})
export class TimelineItemRowComponent implements OnInit {
  @Input() row!: TimelineItemService[][];
  @Input() openItemFullPage!: (item: TimelineItemService) => {};

  hoverOver: boolean;
  constructor() {
    this.hoverOver = false;
   }

  ngOnInit() {
  }

  isHovering(hover: boolean){
    this.hoverOver = hover;
  }

}
