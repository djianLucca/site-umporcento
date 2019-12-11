import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPageContentComponent } from './contact-page-content.component';

describe('ContactPageContentComponent', () => {
  let component: ContactPageContentComponent;
  let fixture: ComponentFixture<ContactPageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
