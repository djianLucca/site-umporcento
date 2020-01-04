import { Component, OnInit, Input } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { Page } from 'src/app/services/enums/pageenum';

@Component({
  selector: 'app-colab-art-slider',
  templateUrl: './colab-art-slider.component.html',
  styleUrls: ['./colab-art-slider.component.scss']
})
export class ColabArtSliderComponent implements OnInit {

  @Input() artist: string;
  config: SwiperOptions;
  page: Page;
  constructor(slider: NgxUsefulSwiperModule) { 
    this.config = {
      pagination: { el: '.swiper-pagination', clickable: true, renderBullet: this.renderBullets },
      spaceBetween: 10,
      slidesPerView: 1,
      slidesPerGroup: 1,
      centeredSlides: true
    };
    this.artist = 'ohohlele';
    this.page = Page.Colab;
  }

  ngOnInit() {
  }

  renderBullets(index: number, className: string): string{
    return '<span class="' + className + '" style="--swiper-theme-color: black;"></span>';
  }

  getImages(): string[]{
    switch (this.artist) {
      case 'ohohlele':
        return ['assets/img/colab/Ohohlele/Ohohlele_1.jpg',
        'assets/img/colab/Ohohlele/Ohohlele_2.jpg',
        'assets/img/colab/Ohohlele/Ohohlele_3.jpg',
        'assets/img/colab/Ohohlele/Ohohlele_4.jpg'];
      case 'pedroemcb':
        return ['assets/img/colab/Pedro_EMCB/Pedro_EMCB1.jpg',
        'assets/img/colab/Pedro_EMCB/Pedro_EMCB2.jpg'];
      case 'projetosomosinstantes':
        return ['assets/img/colab/Somos_Instantes/Somos_Instantes.jpg']
      default:
        return [];
    }
  }

}
