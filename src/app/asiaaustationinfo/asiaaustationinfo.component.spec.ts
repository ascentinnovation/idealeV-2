import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiaaustationinfoComponent } from './asiaaustationinfo.component';

describe('AsiaaustationinfoComponent', () => {
  let component: AsiaaustationinfoComponent;
  let fixture: ComponentFixture<AsiaaustationinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsiaaustationinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsiaaustationinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
