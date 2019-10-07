import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  imageObject = [{
    image: 'assets/img/image_1.jpg',
    thumbImage: 'assets/img/image_1.jpg',
    alt: 'alt of image',
  }, {
    image: 'assets/img/image_2.jpg',
    thumbImage: 'assets/img/image_2.jpg',
    alt: 'Image alt'
  }, {
    image: 'assets/img/image_3.jpg',
    thumbImage: 'assets/img/image_3.jpg',
    alt: 'Image alt'
  }
  ];
  imageSize = this.defineImageSize();
  @ViewChild('nav', {static: false}) slider !: NgImageSliderComponent;

  defineImageSize(): {width: number, height: number} {
    if (window.outerWidth <= 1366) {
      return { width: 390, height: 300 };
    }
    return { width: 569, height: 438 };
  }

  prevImageClick() {
    this.slider.prev();
  }

  nextImageClick() {
    this.slider.next();
  }

  ngOnInit() {
  }

}
