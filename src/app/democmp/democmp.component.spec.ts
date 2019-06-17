import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemocmpComponent } from './democmp.component';

describe('DemocmpComponent', () => {
  let component: DemocmpComponent;
  let fixture: ComponentFixture<DemocmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemocmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemocmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
