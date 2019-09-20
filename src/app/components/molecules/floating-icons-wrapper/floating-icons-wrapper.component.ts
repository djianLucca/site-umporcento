import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-icons-wrapper',
  templateUrl: './floating-icons-wrapper.component.html',
  styleUrls: ['./floating-icons-wrapper.component.scss']
})
export class FloatingIconsWrapperComponent implements OnInit {
  imageSrc: string;
  constructor() {
    this.imageSrc = '/assets/img/selo.jpg';
  }

  ngOnInit() {
  }

}
