import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampPageContentComponent } from './stamp-page-content.component';

describe('StampPageContentComponent', () => {
  let component: StampPageContentComponent;
  let fixture: ComponentFixture<StampPageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampPageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
