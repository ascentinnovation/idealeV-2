import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergieinfoComponent } from './energieinfo.component';

describe('EnergieinfoComponent', () => {
  let component: EnergieinfoComponent;
  let fixture: ComponentFixture<EnergieinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergieinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergieinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
