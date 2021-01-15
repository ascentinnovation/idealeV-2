import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuriteinfoComponent } from './securiteinfo.component';

describe('SecuriteinfoComponent', () => {
  let component: SecuriteinfoComponent;
  let fixture: ComponentFixture<SecuriteinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuriteinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuriteinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
