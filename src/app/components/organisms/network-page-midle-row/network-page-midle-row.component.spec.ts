import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkPageMidleRowComponent } from './network-page-midle-row.component';

describe('NetworkPageMidleRowComponent', () => {
  let component: NetworkPageMidleRowComponent;
  let fixture: ComponentFixture<NetworkPageMidleRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkPageMidleRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkPageMidleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
