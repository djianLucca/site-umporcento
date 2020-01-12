import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-icons-menu',
  templateUrl: './timeline-icons-menu.component.html',
  styleUrls: ['./timeline-icons-menu.component.scss']
})
export class TimelineIconsMenuComponent implements OnInit {
  @Input() changeItemType!: (type: string) => {};
  constructor() { }

  ngOnInit() {
  }

}
