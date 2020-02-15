import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/services/enums/pageenum';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { PageLocationHelperService } from 'src/app/services/helper/page-location-helper.service';
import { scaler } from 'src/app/services/animations/generalAnimations';

@Component({
  selector: 'app-us-page-midle-row',
  templateUrl: './us-page-midle-row.component.html',
  animations: [
    scaler
  ],
  styleUrls: ['./us-page-midle-row.component.scss']
})
export class UsPageMidleRowComponent implements OnInit {
  
  @Input() page: Page;
  @Input() pageSection: PageSectionStatus;
  @Input() menuAction!: () => void;
  pageLocationHelper: PageLocationHelperService;
  imagesColection: {image: string, active: boolean, instagram: string, class: string}[]

  constructor() { 
    this.page = Page.Us;
    this.pageSection = PageSectionStatus.Night;
    this.pageLocationHelper = new PageLocationHelperService();
    this.imagesColection = [
      {
        image: '01',
        active: true,
        instagram: 'angelmirapalheta',
        class: 'us responsive'
      },
      {
        image: '02',
        active: false,
        instagram: '',
        class: 'responsive'
      },
      {
        image: '03',
        active: false,
        instagram: '',
        class: 'responsive'
      },
      {
        image: '04',
        active: false,
        instagram: '',
        class: 'responsive'
      },
      {
        image: '05',
        active: false,
        instagram: '',
        class: 'responsive'
      },
      {
        image: '06',
        active: false,
        instagram: '',
        class: 'responsive'
      },
      {
        image: '07',
        active: false,
        instagram: '',
        class: 'responsive'
      },
      {
        image: '08',
        active: false,
        instagram: '',
        class: 'responsive'
      },
      {
        image: '09',
        active: true,
        instagram: 'oterolima',
        class: 'us responsive'
      },
      {
        image: '10',
        active: false,
        instagram: '',
        class: 'responsive'
      },
      {
        image: '11',
        active: false,
        instagram: '',
        class: 'responsive'
      },
      {
        image: '12',
        active: true,
        instagram: 'vanjavasconcelospereira',
        class: 'us responsive'
      },
      {
        image: '13',
        active: false,
        instagram: '',
        class: 'responsive'
      },
      {
        image: '14',
        active: false,
        instagram: '',
        class: 'responsive'
      },
      {
        image: '15',
        active: false,
        instagram: '',
        class: 'responsive'
      },
      {
        image: '16',
        active: false,
        instagram: '',
        class: 'responsive'
      },
      {
        image: '17',
        active: false,
        instagram: '',
        class: 'responsive'
      },
      {
        image: '18',
        active: false,
        instagram: '',
        class: 'responsive'
      },
      {
        image: '19',
        active: false,
        instagram: '',
        class: 'responsive'
      },
      {
        image: '20',
        active: false,
        instagram: '',
        class: 'responsive'
      },
      {
        image: '21',
        active: false,
        instagram: '',
        class: 'responsive'
      },
      {
        image: '22',
        active: false,
        instagram: '',
        class: 'responsive'
      }
    ]
    this.imagesColection = this.shuffleArray(this.imagesColection);

  }
  shuffleArray(array: {image: string, active: boolean, instagram: string, class: string}[]):{image: string, active: boolean, instagram: string, class: string}[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
  ngOnInit() {
  }

}
