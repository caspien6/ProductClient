import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermekFoundedbyCategoryComponent } from './termek-foundedby-category.component';

describe('TermekFoundedbyCategoryComponent', () => {
  let component: TermekFoundedbyCategoryComponent;
  let fixture: ComponentFixture<TermekFoundedbyCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermekFoundedbyCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermekFoundedbyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
