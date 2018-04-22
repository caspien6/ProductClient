import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermekekDisplayComponent } from './termekek-display.component';

describe('TermekekDisplayComponent', () => {
  let component: TermekekDisplayComponent;
  let fixture: ComponentFixture<TermekekDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermekekDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermekekDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
