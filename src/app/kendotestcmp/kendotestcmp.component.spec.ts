import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendotestcmpComponent } from './kendotestcmp.component';

describe('KendotestcmpComponent', () => {
  let component: KendotestcmpComponent;
  let fixture: ComponentFixture<KendotestcmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendotestcmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendotestcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
