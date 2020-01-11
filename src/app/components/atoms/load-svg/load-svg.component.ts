import { Component, OnInit, Input } from '@angular/core';
import { heartBeatAnimation } from 'angular-animations';

@Component({
  selector: 'app-load-svg',
  templateUrl: './load-svg.component.html',
  animations:[
    heartBeatAnimation({duration: 800})
  ],
  styleUrls: ['./load-svg.component.scss']
})
export class LoadSvgComponent implements OnInit {

  @Input() svg: string;
  @Input() class: string;
  @Input() id: string;
  animIcon: boolean;
  constructor() {
    this.svg = '';
    this.class = 'night';
    this.id = 'loaded-svg';
    this.animIcon = false;
  }

  ngOnInit() {
  }
  animateIcon(){
    this.animIcon = true;
  }


}
