import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmissioninfoComponent } from './transmissioninfo.component';

describe('TransmissioninfoComponent', () => {
  let component: TransmissioninfoComponent;
  let fixture: ComponentFixture<TransmissioninfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransmissioninfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmissioninfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
