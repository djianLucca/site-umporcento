import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-refresh-timeline-btn',
  templateUrl: './refresh-timeline-btn.component.html',
  styleUrls: ['./refresh-timeline-btn.component.scss']
})
export class RefreshTimelineBtnComponent implements OnInit {
  @Input() refreshComponent!: () => {};
  constructor() { }

  ngOnInit() {
  }

}
