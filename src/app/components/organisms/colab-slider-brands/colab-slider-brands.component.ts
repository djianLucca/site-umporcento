import { Component, OnInit, Input } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

@Component({
  selector: 'app-colab-slider-brands',
  templateUrl: './colab-slider-brands.component.html',
  styleUrls: ['./colab-slider-brands.component.scss']
})
export class ColabSliderBrandsComponent implements OnInit {

  config: SwiperOptions;
  @Input() itemAction!: (colab: string) => void;
  constructor(slider: NgxUsefulSwiperModule) { 
    this.config = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 10,
      slidesPerView: 3,
      slidesPerGroup: 1,
      loop: true
    };
  }

  ngOnInit() {
  }

}
