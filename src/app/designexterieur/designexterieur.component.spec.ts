import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignexterieurComponent } from './designexterieur.component';

describe('DesignexterieurComponent', () => {
  let component: DesignexterieurComponent;
  let fixture: ComponentFixture<DesignexterieurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignexterieurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignexterieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
