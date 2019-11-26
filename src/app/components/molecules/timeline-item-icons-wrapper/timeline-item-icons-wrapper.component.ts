import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-item-icons-wrapper',
  templateUrl: './timeline-item-icons-wrapper.component.html',
  styleUrls: ['./timeline-item-icons-wrapper.component.scss']
})
export class TimelineItemIconsWrapperComponent implements OnInit {
  @Input() itemType: string;
  timelineIconType: string[];
  constructor() { 
    this.timelineIconType = [];
    this.itemType = '';
  }

  ngOnInit() {
    try {
      this.timelineIconType = JSON.parse(this.itemType);
      this.timelineIconType = this.timelineIconType.map(element => '/assets/img/timeline/icon/'+element+'.png')
    } catch (error) {
      this.timelineIconType = ['/assets/img/timeline/icon/'+this.itemType+'.png'];
    }
  }

}
