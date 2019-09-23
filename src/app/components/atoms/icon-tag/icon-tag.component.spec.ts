import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTagComponent } from './icon-tag.component';

describe('IconTagComponent', () => {
  let component: IconTagComponent;
  let fixture: ComponentFixture<IconTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
