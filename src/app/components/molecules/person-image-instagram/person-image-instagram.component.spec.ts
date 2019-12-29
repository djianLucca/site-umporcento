import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonImageInstagramComponent } from './person-image-instagram.component';

describe('PersonImageInstagramComponent', () => {
  let component: PersonImageInstagramComponent;
  let fixture: ComponentFixture<PersonImageInstagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonImageInstagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonImageInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
