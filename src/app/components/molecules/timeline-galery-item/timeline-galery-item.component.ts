import { Component, OnInit, Input } from '@angular/core';
import { TimelineItemService } from 'src/app/services/timeline-item.service';

@Component({
  selector: 'app-timeline-galery-item',
  templateUrl: './timeline-galery-item.component.html',
  styleUrls: ['./timeline-galery-item.component.scss']
})
export class TimelineGaleryItemComponent implements OnInit {
  @Input() timelineItem!: TimelineItemService;
  timelineIconType: string[];
  timelineItemsImages: string[];
  galeryImagesLeft: string[];
  galeryImagesUp: string[];
  galeryImagesRight: string[];
  galeryImagesDown: string[];
  constructor() {
    this.timelineIconType = [];
    this.timelineItemsImages = [];
    this.galeryImagesLeft = [];
    this.galeryImagesUp = [];
    this.galeryImagesRight = [];
    this.galeryImagesDown = [];
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

    if (this.timelineItem.galeryImagesRight > 0) {
      this.galeryImagesRight = this.filterRightImages();
    }

    if (this.timelineItem.galeryImagesDown > 0) {
      this.galeryImagesDown = this.filterDownImages();
    }
  }
  filterLeftImages(): string[] {
    const numberOfElements = (this.timelineItem.galeryImagesLeft < 1) ?
      this.timelineItem.galeryImagesLeft - 1 :
      this.timelineItem.galeryImagesLeft;
    const tempArray = [];
    for (let index = 0; index < numberOfElements; index++) {
      tempArray.push(this.timelineItemsImages[index]);
    }

    return tempArray;
  }

  filterUpImages(): string[] {
    const numberOfElements = (this.timelineItem.galeryImagesUp < 1) ?
      this.timelineItem.galeryImagesUp - 1 :
      this.timelineItem.galeryImagesUp;
    const tempArray = [];
    for (let index = 0; index < numberOfElements; index++) {
      tempArray.push(this.timelineItemsImages[index]);
    }

    return tempArray;
  }

  filterRightImages(): string[] {
    const numberOfElements = (this.timelineItem.galeryImagesRight < 1) ?
      this.timelineItem.galeryImagesRight - 1 :
      this.timelineItem.galeryImagesRight;
    const tempArray = [];
    for (let index = 0; index < numberOfElements; index++) {
      tempArray.push(this.timelineItemsImages[index]);
    }

    return tempArray;
  }

  filterDownImages(): string[] {
    const numberOfElements = (this.timelineItem.galeryImagesDown < 1) ?
      this.timelineItem.galeryImagesDown - 1 :
      this.timelineItem.galeryImagesDown;
    const tempArray = [];
    for (let index = 0; index < numberOfElements; index++) {
      tempArray.push(this.timelineItemsImages[index]);
    }

    return tempArray;
  }
}
