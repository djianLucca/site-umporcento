import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-full-page-item',
  templateUrl: './timeline-full-page-item.component.html',
  styleUrls: ['./timeline-full-page-item.component.scss']
})
export class TimelineFullPageItemComponent implements OnInit {
  @Input() item!: any;
  @Input() close!: () => {};
  constructor() { }

  ngOnInit() {
  }

}
