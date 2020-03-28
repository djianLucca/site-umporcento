import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-tag',
  templateUrl: './image-tag.component.html',
  styleUrls: ['./image-tag.component.scss']
})
export class ImageTagComponent implements OnInit {
  @Input() imgSrc: string;
  @Input() imgAlt: string | undefined;
  @Input() id: string | undefined;
  @Input() class: string | undefined;
  @Input() isHovering: boolean | undefined;
  constructor() {
    this.imgSrc = '';
   }

  ngOnInit() {
  }

}
