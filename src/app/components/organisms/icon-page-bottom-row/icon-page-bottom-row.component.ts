import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { PaletPositionService } from 'src/app/services/palet-position.service';

@Component({
  selector: 'app-icon-page-bottom-row',
  templateUrl: './icon-page-bottom-row.component.html',
  styleUrls: ['./icon-page-bottom-row.component.scss']
})
export class IconPageBottomRowComponent implements OnInit {
  @Input() pageSection!: PageSectionStatus;
  @Output() paletsPosition = new EventEmitter<PaletPositionService>();
  
  constructor() {
  }

  ngOnInit() {
  }

  handlePaletsPosition(palets: PaletPositionService){
    this.paletsPosition.emit(palets);
  }
}
