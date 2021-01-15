import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdialaconduiteComponent } from './adialaconduite.component';

describe('AdialaconduiteComponent', () => {
  let component: AdialaconduiteComponent;
  let fixture: ComponentFixture<AdialaconduiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdialaconduiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdialaconduiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
