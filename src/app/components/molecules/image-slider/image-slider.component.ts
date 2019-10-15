import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
import { Page } from 'src/app/services/enums/pageenum';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  imageObject: Array<Object>;
  @Input() page!: Page;
  imageSize = this.defineImageSize();
  @ViewChild('nav', {static: false}) slider !: NgImageSliderComponent;

  constructor(){
    this.imageObject = [];
  }

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
    this.imageObject = this.getImagesBasedOnPage(this.page);
  }

  getImagesBasedOnPage(page: Page): Array<Object>{
    switch (page) {
      case Page.Compass:
        return this.getCompassImages();
    }

    return [];
  }

  getCompassImages(): Array<Object>{
    return [{
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
  }

}
