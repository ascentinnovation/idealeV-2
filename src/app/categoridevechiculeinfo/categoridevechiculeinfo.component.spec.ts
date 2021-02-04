import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoridevechiculeinfoComponent } from './categoridevechiculeinfo.component';

describe('CategoridevechiculeinfoComponent', () => {
  let component: CategoridevechiculeinfoComponent;
  let fixture: ComponentFixture<CategoridevechiculeinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoridevechiculeinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoridevechiculeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
