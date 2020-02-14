import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colab-area-slider-input-group',
  templateUrl: './colab-area-slider-input-group.component.html',
  styleUrls: ['./colab-area-slider-input-group.component.scss']
})
export class ColabAreaSliderInputGroupComponent implements OnInit {
  activeSlider: string;

  constructor() {
    this.activeSlider = 'art';
   }

  ngOnInit() {
  }

  handleMenuClick(slider: string){
    this.activeSlider = slider;
  }

}
