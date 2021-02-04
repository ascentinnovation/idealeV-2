import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatsdemarechercheComponent } from './resultatsdemarecherche.component';

describe('ResultatsdemarechercheComponent', () => {
  let component: ResultatsdemarechercheComponent;
  let fixture: ComponentFixture<ResultatsdemarechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultatsdemarechercheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatsdemarechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
