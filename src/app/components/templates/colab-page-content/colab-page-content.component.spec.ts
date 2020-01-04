import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColabPageContentComponent } from './colab-page-content.component';

describe('ColabPageContentComponent', () => {
  let component: ColabPageContentComponent;
  let fixture: ComponentFixture<ColabPageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColabPageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColabPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
