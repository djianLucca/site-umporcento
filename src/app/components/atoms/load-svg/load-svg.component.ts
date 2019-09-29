import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-load-svg',
  templateUrl: './load-svg.component.html',
  styleUrls: ['./load-svg.component.scss']
})
export class LoadSvgComponent implements OnInit {

  @Input() svg: string;
  @Input() class: string;
  constructor() {
    this.svg = '';
    this.class = 'night';
  }

  ngOnInit() {
  }

}
