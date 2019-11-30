import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarIdentifierInformativePageComponent } from './top-bar-identifier-informative-page.component';

describe('TopBarIdentifierInformativePageComponent', () => {
  let component: TopBarIdentifierInformativePageComponent;
  let fixture: ComponentFixture<TopBarIdentifierInformativePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBarIdentifierInformativePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarIdentifierInformativePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
