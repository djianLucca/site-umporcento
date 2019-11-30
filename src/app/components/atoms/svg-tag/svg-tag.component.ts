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
  @Input() elementYTransform: number;
  @Input() elementXTransform: number;
  @Input() class: string;
  @Input() id: string;
  gTransform: string | undefined;

  constructor() {
    this.svgWidth = '100%';
    this.svgHeight = '1';
    this.svgType = 'line';
    this.x = 0;
    this.y = 0;
    this.color = 'rgb(256,256,256)';
    this.elementWidth = '100%';
    this.elementHeight = '1';
    this.elementXTransform = 0;
    this.elementYTransform = Number(this.svgHeight) / 2;
    this.class = '';
    this.id = '';
  }

  ngOnInit() {
    this.gTransform = `translate(${this.elementXTransform}px, ${this.elementYTransform}px)`;
  }

}
