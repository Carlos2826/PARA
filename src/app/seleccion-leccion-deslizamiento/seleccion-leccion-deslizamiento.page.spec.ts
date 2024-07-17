import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionLeccionDeslizamientoPage } from './seleccion-leccion-deslizamiento.page';

describe('SeleccionLeccionDeslizamientoPage', () => {
  let component: SeleccionLeccionDeslizamientoPage;
  let fixture: ComponentFixture<SeleccionLeccionDeslizamientoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionLeccionDeslizamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
