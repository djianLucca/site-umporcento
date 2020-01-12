import { Component, OnInit, Input } from '@angular/core';
import { TimelineItemService } from 'src/app/services/timeline-item.service';
import { jackInTheBoxOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-timeline-galery-item',
  templateUrl: './timeline-galery-item.component.html',
  animations:[
    jackInTheBoxOnEnterAnimation()
  ],
  styleUrls: ['./timeline-galery-item.component.scss']
})
export class TimelineGaleryItemComponent implements OnInit {
  @Input() timelineItem!: TimelineItemService;
  @Input() class!: string;
  timelineIconType: string[];
  timelineItemsImages: string[];
  galeryImagesLeft: string[];
  galeryImagesUp: string[];
  galeryImagesRight: string[];
  galeryImagesDown: string[];
  lastUsedImage : number;
  constructor() {
    this.timelineIconType = [];
    this.timelineItemsImages = [];
    this.galeryImagesLeft = [];
    this.galeryImagesUp = [];
    this.galeryImagesRight = [];
    this.galeryImagesDown = [];
    this.lastUsedImage = -1;
  }

  ngOnInit() {
    this.timelineItemsImages = JSON.parse(this.timelineItem.images);
    this.filterImagesByLocation(this.timelineItemsImages );
  }

  ecodeToUrl(text: string): string {
    return encodeURI(text);
  }

  filterImagesByLocation(timelineItemsImages: string[]) {
    if (timelineItemsImages.length <= 0) {
      return;
    }
    if (this.timelineItem.galeryImagesLeft > 0) {

      this.galeryImagesLeft = this.filterLeftImages();
    }

    if (this.timelineItem.galeryImagesUp > 0) {
      this.galeryImagesUp = this.filterUpImages();
    }
    if (this.timelineItem.galeryImagesDown > 0) {
      this.galeryImagesDown = this.filterDownImages();
    }
    if (this.timelineItem.galeryImagesRight > 0) {
      this.galeryImagesRight = this.filterRightImages();
    }
  }
  filterLeftImages(): string[] {
    this.lastUsedImage = this.lastUsedImage + 1;
    const numberOfElements = this.timelineItem.galeryImagesLeft + this.lastUsedImage;

    const tempArray = [];
    for (let index = this.lastUsedImage; index < numberOfElements; index++) {
      tempArray.push(this.timelineItemsImages[index]);
      this.lastUsedImage = index;
    }

    return tempArray;
  }

  filterUpImages(): string[] {
    this.lastUsedImage = this.lastUsedImage + 1;
    const numberOfElements = this.timelineItem.galeryImagesUp + this.lastUsedImage;

    const tempArray = [];
    for (let index = this.lastUsedImage; index < numberOfElements; index++) {
      tempArray.push(this.timelineItemsImages[index]);
      this.lastUsedImage = index;
    }

    return tempArray;
  }

  filterRightImages(): string[] {
    this.lastUsedImage = this.lastUsedImage + 1;
    const numberOfElements = this.timelineItem.galeryImagesRight + this.lastUsedImage;

    const tempArray = [];
    for (let index = this.lastUsedImage; index < numberOfElements; index++) {
      tempArray.push(this.timelineItemsImages[index]);
      this.lastUsedImage = index;
    }

    return tempArray;
  }

  filterDownImages(): string[] {
    this.lastUsedImage = this.lastUsedImage + 1;
    const numberOfElements = this.timelineItem.galeryImagesDown + this.lastUsedImage;
    const tempArray = [];

    for (let index = this.lastUsedImage; index < numberOfElements; index++) {
      tempArray.push(this.timelineItemsImages[index]);
      this.lastUsedImage = index;
    }

    return tempArray;
  }
}
