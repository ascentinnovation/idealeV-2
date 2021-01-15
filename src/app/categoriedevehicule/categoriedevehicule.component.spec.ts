import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriedevehiculeComponent } from './categoriedevehicule.component';

describe('CategoriedevehiculeComponent', () => {
  let component: CategoriedevehiculeComponent;
  let fixture: ComponentFixture<CategoriedevehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriedevehiculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriedevehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
