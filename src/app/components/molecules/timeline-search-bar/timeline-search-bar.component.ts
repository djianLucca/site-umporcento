import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { SearchResultsService } from 'src/app/services/search-results.service';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';

@Component({
  selector: 'app-timeline-search-bar',
  templateUrl: './timeline-search-bar.component.html',
  animations:[
    trigger('expandWidth',[
      transition('false => true', [
        style({ width: '0em', opacity: '0' }),
        animate('500ms', style({ width: '18em', opacity: '1' }))
      ])
    ])
  ],
  styleUrls: ['./timeline-search-bar.component.scss']
})
export class TimelineSearchBarComponent implements OnInit {
  showInput: boolean;
  @Input() searchText!: (text: string | boolean) => {};
  @Input() inputValue: string;
  @Input() results: SearchResultsService[] | undefined;
  @Input() pageSection!: PageSectionStatus;

  constructor() {
    this.showInput = false;
    this.inputValue = '';
   }

  ngOnInit() {
  }

  toggleInput(){
    this.showInput = true;
  }
  
  handleInput(event: KeyboardEvent){
    const target = event.target as HTMLInputElement;
    this.inputValue = target.value;
  }

}
