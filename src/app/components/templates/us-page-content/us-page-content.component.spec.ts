import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsPageContentComponent } from './us-page-content.component';

describe('UsPageContentComponent', () => {
  let component: UsPageContentComponent;
  let fixture: ComponentFixture<UsPageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsPageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
