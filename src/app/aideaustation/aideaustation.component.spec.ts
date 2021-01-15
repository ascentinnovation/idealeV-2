import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AideaustationComponent } from './aideaustation.component';

describe('AideaustationComponent', () => {
  let component: AideaustationComponent;
  let fixture: ComponentFixture<AideaustationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AideaustationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AideaustationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
