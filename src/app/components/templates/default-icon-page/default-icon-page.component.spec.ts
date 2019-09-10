import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultIconPageComponent } from './default-icon-page.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-background',
  template: ''
})
class MockPageBackgroundComponent {

}
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'router-outlet',
  template: ''
})
class MockRouterOutletComponent {

}
describe('DefaultIconPageComponent', () => {
  let component: DefaultIconPageComponent;
  let fixture: ComponentFixture<DefaultIconPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DefaultIconPageComponent,
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
