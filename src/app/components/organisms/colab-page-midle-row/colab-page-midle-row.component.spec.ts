import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColabPageMidleRowComponent } from './colab-page-midle-row.component';

describe('ColabPageMidleRowComponent', () => {
  let component: ColabPageMidleRowComponent;
  let fixture: ComponentFixture<ColabPageMidleRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColabPageMidleRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColabPageMidleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
