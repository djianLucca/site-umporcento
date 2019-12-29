import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardiansPageContentComponent } from './guardians-page-content.component';

describe('GuardiansPageContentComponent', () => {
  let component: GuardiansPageContentComponent;
  let fixture: ComponentFixture<GuardiansPageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardiansPageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardiansPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
