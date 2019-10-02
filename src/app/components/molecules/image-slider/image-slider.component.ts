import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  imageObject: Array<object>;
  imageSize: { width: number, height: number };
  constructor() {
    this.imageObject = [{
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
    this.imageSize = { width: 569, height: 438 };
  }

  ngOnInit() {
  }

}
