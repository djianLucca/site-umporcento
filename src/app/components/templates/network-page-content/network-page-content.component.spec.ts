import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkPageContentComponent } from './network-page-content.component';

describe('NetworkPageContentComponent', () => {
  let component: NetworkPageContentComponent;
  let fixture: ComponentFixture<NetworkPageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkPageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
