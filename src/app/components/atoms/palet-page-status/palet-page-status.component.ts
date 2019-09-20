import { Component, OnInit, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';

@Component({
  selector: 'app-palet-page-status',
  templateUrl: './palet-page-status.component.html',
  styleUrls: ['./palet-page-status.component.scss']
})
export class PaletPageStatusComponent implements OnInit {
  @Input() id: string;
  @Input() class: string;
  @Input() name: string;
  @Input() animation: string;
  @Input() pageStatus: PageSectionStatus;
  @Input() paletPageStatus: PageSectionStatus;

  constructor() {
    this.id = '';
    this.class = '';
    this.animation = '';
    this.name = '';
    this.pageStatus = PageSectionStatus.Morning;
    this.paletPageStatus = PageSectionStatus.Morning;
  }

  ngOnInit() {
  }

  isOn(): boolean {
    if (this.pageStatus === this.paletPageStatus) {
      return true;
    }
    return false;
  }

}
