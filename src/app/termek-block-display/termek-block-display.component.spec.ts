import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermekBlockDisplayComponent } from './termek-block-display.component';

describe('TermekBlockDisplayComponent', () => {
  let component: TermekBlockDisplayComponent;
  let fixture: ComponentFixture<TermekBlockDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermekBlockDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermekBlockDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
