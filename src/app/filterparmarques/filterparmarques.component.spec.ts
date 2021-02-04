import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterparmarquesComponent } from './filterparmarques.component';

describe('FilterparmarquesComponent', () => {
  let component: FilterparmarquesComponent;
  let fixture: ComponentFixture<FilterparmarquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterparmarquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterparmarquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
