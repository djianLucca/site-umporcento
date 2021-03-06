import { Component, Input, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MenuGroupService } from 'src/app/services/menu-group.service';
import { MenuTitlePositionService } from 'src/app/services/menu-title-position.service';

@Component({
  selector: 'app-menu-content',
  templateUrl: './menu-content.component.html',
  styleUrls: ['./menu-content.component.scss']
})
export class MenuContentComponent implements AfterViewInit {

  @Input() menuContent!: MenuGroupService[];
  @ViewChild('wrapper', {static:true}) wrapper!: ElementRef<HTMLDivElement>;
  @Output() menuTitlePosition = new EventEmitter<MenuTitlePositionService>();
  
  constructor() { }

  ngAfterViewInit() {
    const firstTitle = this.wrapper.nativeElement.children[0].children[0].children[0] as HTMLElement;
    const secondTitle = this.wrapper.nativeElement.children[1].children[0].children[0] as HTMLElement;
    const thirdTitle = this.wrapper.nativeElement.children[2].children[0].children[0] as HTMLElement;
    this.menuTitlePosition.emit(new MenuTitlePositionService(
      firstTitle,
      secondTitle,
      thirdTitle
    ));
  }

  openGabw(){
    window.open('https://gabw.cc/', "_blank");
  }
}
