import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformativePageContentComponent } from './informative-page-content.component';

describe('InformativePageContentComponent', () => {
  let component: InformativePageContentComponent;
  let fixture: ComponentFixture<InformativePageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformativePageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformativePageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
