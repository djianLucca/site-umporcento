import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPageContentComponent } from './icon-page-content.component';

describe('IconPageContentComponent', () => {
  let component: IconPageContentComponent;
  let fixture: ComponentFixture<IconPageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconPageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
