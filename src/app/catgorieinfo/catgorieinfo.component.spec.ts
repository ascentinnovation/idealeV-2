import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatgorieinfoComponent } from './catgorieinfo.component';

describe('CatgorieinfoComponent', () => {
  let component: CatgorieinfoComponent;
  let fixture: ComponentFixture<CatgorieinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatgorieinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatgorieinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
