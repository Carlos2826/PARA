import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Nivel1DeslizamientoPage } from './nivel1-deslizamiento.page';

describe('Nivel1DeslizamientoPage', () => {
  let component: Nivel1DeslizamientoPage;
  let fixture: ComponentFixture<Nivel1DeslizamientoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Nivel1DeslizamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
