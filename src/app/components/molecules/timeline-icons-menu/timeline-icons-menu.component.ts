import { Component, OnInit, Input } from '@angular/core';
import { fadeInLeftOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-timeline-icons-menu',
  templateUrl: './timeline-icons-menu.component.html',
  animations:[
    fadeInLeftOnEnterAnimation()
  ],
  styleUrls: ['./timeline-icons-menu.component.scss']
})
export class TimelineIconsMenuComponent implements OnInit {
  @Input() changeItemType!: (type: string) => {};
  constructor() { }

  ngOnInit() {
  }

}
