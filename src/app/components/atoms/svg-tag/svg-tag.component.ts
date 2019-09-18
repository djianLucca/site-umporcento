import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-svg-tag',
  templateUrl: './svg-tag.component.html',
  styleUrls: ['./svg-tag.component.scss']
})
export class SvgTagComponent implements OnInit {
  @Input() color: string;
  @Input() svgWidth: string;
  @Input() svgHeight: string;
  @Input() svgType: string;
  @Input() x: number;
  @Input() y: number;
  @Input() elementWidth: string;
  @Input() elementHeight: string;

  constructor() {
    this.svgWidth = '100%';
    this.svgHeight = '2';
    this.svgType = 'line';
    this.x = 0;
    this.y = 0;
    this.color = 'rgb(256,256,256)';
    this.elementWidth = '100%';
    this.elementHeight = '2';
  }

  ngOnInit() {
  }

}
