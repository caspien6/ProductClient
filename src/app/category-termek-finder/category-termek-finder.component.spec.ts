import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTermekFinderComponent } from './category-termek-finder.component';

describe('CategoryTermekFinderComponent', () => {
  let component: CategoryTermekFinderComponent;
  let fixture: ComponentFixture<CategoryTermekFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryTermekFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTermekFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
