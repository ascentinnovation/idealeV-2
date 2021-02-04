import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatderechecheComponent } from './resultatderecheche.component';

describe('ResultatderechecheComponent', () => {
  let component: ResultatderechecheComponent;
  let fixture: ComponentFixture<ResultatderechecheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultatderechecheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatderechecheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
