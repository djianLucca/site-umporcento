import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-tag',
  templateUrl: './icon-tag.component.html',
  styleUrls: ['./icon-tag.component.scss']
})
export class IconTagComponent implements OnInit {
  @Input() id: string;
  @Input() class: string;
  @Input() name: string;
  @Input() animation: string;

  constructor() {
    this.id = '';
    this.class = '';
    this.animation = '';
    this.name = '';
  }

  ngOnInit() {
  }

}
