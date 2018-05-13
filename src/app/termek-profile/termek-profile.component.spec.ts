import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermekProfileComponent } from './termek-profile.component';

describe('TermekProfileComponent', () => {
  let component: TermekProfileComponent;
  let fixture: ComponentFixture<TermekProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermekProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermekProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
