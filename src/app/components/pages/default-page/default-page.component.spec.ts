import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPageComponent } from './default-page.component';
import { Component, Input } from '@angular/core';
import { PageSectionBackground } from 'src/app/services/enums/pageSectionbackgroundenum';

@Component({
  selector: 'app-page-background',
  template: ''
})
class MockPageBackgroundComponent {
  @Input() backgroundVideo: PageSectionBackground;
  constructor(){
    this.backgroundVideo = PageSectionBackground.Afternoon;
  }
}
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'router-outlet',
  template: ''
})
class MockRouterOutletComponent {
 
}
describe('DefaultIconPageComponent', () => {
  let component: DefaultPageComponent;
  let fixture: ComponentFixture<DefaultPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DefaultPageComponent,
        MockPageBackgroundComponent,
        MockRouterOutletComponent
      ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultIconPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
