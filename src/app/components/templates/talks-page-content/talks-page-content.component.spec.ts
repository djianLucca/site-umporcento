import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalksPageContentComponent } from './talks-page-content.component';

describe('TalksPageContentComponent', () => {
  let component: TalksPageContentComponent;
  let fixture: ComponentFixture<TalksPageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalksPageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalksPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
