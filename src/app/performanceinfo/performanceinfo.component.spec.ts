import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceinfoComponent } from './performanceinfo.component';

describe('PerformanceinfoComponent', () => {
  let component: PerformanceinfoComponent;
  let fixture: ComponentFixture<PerformanceinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
