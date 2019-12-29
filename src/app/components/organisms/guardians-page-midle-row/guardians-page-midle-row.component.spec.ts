import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardiansPageMidleRowComponent } from './guardians-page-midle-row.component';

describe('GuardiansPageMidleRowComponent', () => {
  let component: GuardiansPageMidleRowComponent;
  let fixture: ComponentFixture<GuardiansPageMidleRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardiansPageMidleRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardiansPageMidleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
