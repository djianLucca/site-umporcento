import { Component, Input, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MenuGroupService } from 'src/app/services/menu-group.service';
import { MenuTitlePositionService } from 'src/app/services/menu-title-position.service';
import { TwoDPositionService } from 'src/app/services/2d-position.service';

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
      this.getAbsolutePosition(firstTitle),
      this.getAbsolutePosition(secondTitle),
      this.getAbsolutePosition(thirdTitle)
    ));
  }

  getAbsolutePosition(node: HTMLElement): TwoDPositionService{
    const element = node.getBoundingClientRect() as DOMRect;
    return new TwoDPositionService(element.x, element.y);
  }

  openGabw(){
    window.open('https://gabw.cc/', "_blank");
  }
}
