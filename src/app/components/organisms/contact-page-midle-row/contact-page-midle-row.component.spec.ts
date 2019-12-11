import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPageMidleRowComponent } from './contact-page-midle-row.component';

describe('ContactPageMidleRowComponent', () => {
  let component: ContactPageMidleRowComponent;
  let fixture: ComponentFixture<ContactPageMidleRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPageMidleRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPageMidleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
