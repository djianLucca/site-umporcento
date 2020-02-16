import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

@Component({
  selector: 'app-talks-slider-images',
  templateUrl: './talks-slider-images.component.html',
  styleUrls: ['./talks-slider-images.component.scss']
})
export class TalksSliderImagesComponent implements OnInit {
  swiperConfig: SwiperOptions;
  constructor(slider: NgxUsefulSwiperModule) { 
    this.swiperConfig = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      centeredSlides: true
    };
  }

  ngOnInit() {
  }

}
