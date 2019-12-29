import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-branding-image-information',
  templateUrl: './branding-image-information.component.html',
  styleUrls: ['./branding-image-information.component.scss']
})
export class BrandingImageInformationComponent implements OnInit {
  @Input() image!: string;
  @Input() imageAlt!: string;
  @Input() title!: string;
  @Input() brandName!: string;
  @Input() instagram!: string;

  constructor() { }

  ngOnInit() {
  }

}
