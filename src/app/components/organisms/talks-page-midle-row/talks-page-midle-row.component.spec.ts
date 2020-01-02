import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalksPageMidleRowComponent } from './talks-page-midle-row.component';

describe('TalksPageMidleRowComponent', () => {
  let component: TalksPageMidleRowComponent;
  let fixture: ComponentFixture<TalksPageMidleRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalksPageMidleRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalksPageMidleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
