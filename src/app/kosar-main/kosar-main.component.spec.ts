import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KosarMainComponent } from './kosar-main.component';

describe('KosarMainComponent', () => {
  let component: KosarMainComponent;
  let fixture: ComponentFixture<KosarMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KosarMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KosarMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
