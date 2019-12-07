import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideLineMidlePageComponent } from './side-line-midle-page.component';

describe('SideLineMidlePageComponent', () => {
  let component: SideLineMidlePageComponent;
  let fixture: ComponentFixture<SideLineMidlePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideLineMidlePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideLineMidlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
