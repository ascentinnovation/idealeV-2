import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabileteComponent } from './habilete.component';

describe('HabileteComponent', () => {
  let component: HabileteComponent;
  let fixture: ComponentFixture<HabileteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabileteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabileteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
