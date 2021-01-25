import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcologieinfoComponent } from './ecologieinfo.component';

describe('EcologieinfoComponent', () => {
  let component: EcologieinfoComponent;
  let fixture: ComponentFixture<EcologieinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcologieinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcologieinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
