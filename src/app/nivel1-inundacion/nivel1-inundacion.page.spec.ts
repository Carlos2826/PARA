import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Nivel1InundacionPage } from './nivel1-inundacion.page';

describe('Nivel1InundacionPage', () => {
  let component: Nivel1InundacionPage;
  let fixture: ComponentFixture<Nivel1InundacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Nivel1InundacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
