import { Component, OnInit } from '@angular/core';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-stamp-image-slider',
  templateUrl: './stamp-image-slider.component.html',
  styleUrls: ['./stamp-image-slider.component.scss']
})
export class StampImageSliderComponent implements OnInit {
  config: SwiperOptions;
  constructor(slider: NgxUsefulSwiperModule) { 
    this.config = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 30,
      slidesPerView: 7,
      slidesPerGroup: 7
    };
  }

  ngOnInit() {

  }

}
